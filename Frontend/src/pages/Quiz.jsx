import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Volume2, Play, Pause, ArrowLeft, ArrowRight } from "lucide-react";
import QuizQuestion from "../components/QuizQuestion";
import QuizResults from "../components/QuizResults";
import DifficultySelector from "../components/DifficultySelector";
import { 
  getDailyQuiz, 
  DIFFICULTY_LEVELS, 
  DIFFICULTY_CONFIG,
  calculateScore,
  saveQuizResult,
  getQuizHistory
} from "../services/quizService";

const Quiz = () => {
  const navigate = useNavigate();
  
  // Quiz state
  const [quizState, setQuizState] = useState('difficulty-select'); // 'difficulty-select', 'quiz', 'results'
  const [selectedDifficulty, setSelectedDifficulty] = useState(DIFFICULTY_LEVELS.BEGINNER);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizResults, setQuizResults] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [audioPlayCount, setAudioPlayCount] = useState(0);

  // Timer effect
  useEffect(() => {
    let timer;
    if (quizState === 'quiz' && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizState]);

  // Initialize quiz
  const initializeQuiz = async (difficulty) => {
    const quiz = await getDailyQuiz(difficulty);
    setCurrentQuiz(quiz);
    setSelectedDifficulty(difficulty);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTimeLeft(quiz.timeLimit * 60); // Convert to seconds
    setQuizState('quiz');
  };

  // Handle answer selection
  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  // Handle next question
  const handleNextQuestion = async () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(currentQuiz.timeLimit * 60); // Reset timer for next question
    } else {
      // Quiz completed
      const results = calculateScore(answers, currentQuiz.questions);
      setQuizResults(results);
      await saveQuizResult({
        ...results,
        difficulty: selectedDifficulty,
        date: currentQuiz.date
      });
      setQuizState('results');
    }
  };

  // Handle retry quiz
  const handleRetry = () => {
    initializeQuiz(selectedDifficulty);
  };

  // Handle new quiz
  const handleNewQuiz = () => {
    setQuizState('difficulty-select');
    setQuizResults(null);
  };

  // Handle audio play
  const handleAudioPlay = (type) => {
    setAudioPlayCount(prev => prev + 1);
  };

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get progress percentage
  const getProgressPercentage = () => {
    if (!currentQuiz) return 0;
    return ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
  };

  // Render difficulty selection
  if (quizState === 'difficulty-select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-cyan-600" />
              <h1 className="text-4xl font-bold text-gray-800">Today's Quiz</h1>
            </div>
            <p className="text-xl text-gray-600 mb-2">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-500">
              Test your Nepali language skills with our daily interactive quiz
            </p>
          </div>

          {/* Audio Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">Audio Pronunciation</h3>
                  <p className="text-sm text-gray-600">Listen to Nepali words and phrases</p>
                </div>
              </div>
              <button
                onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isAudioEnabled
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                {isAudioEnabled ? 'Enabled' : 'Disabled'}
              </button>
            </div>
          </div>

          {/* Difficulty Selector */}
          <DifficultySelector
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
          />

          {/* Start Quiz Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => initializeQuiz(selectedDifficulty)}
              className="bg-[#133251] text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-[#0f2a42] transition duration-200 shadow-lg"
            >
              Start Today's Quiz
            </button>
          </div>

          {/* Quiz History */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Quiz History</h3>
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
              <QuizHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render quiz
  if (quizState === 'quiz' && currentQuiz) {
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const config = DIFFICULTY_CONFIG[selectedDifficulty];

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Quiz Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuizState('difficulty-select')}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Selection</span>
                </button>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Calendar size={20} className="text-cyan-600" />
                  <span className="font-semibold text-gray-800">Today's Quiz</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                  <div className={`w-3 h-3 rounded-full bg-${config.color}-500`}></div>
                  <span className="text-sm font-medium">{config.name}</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  <Clock size={16} />
                  <span className="text-sm font-medium">{formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{currentQuestionIndex + 1} of {currentQuiz.questions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#133251] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Question */}
          <QuizQuestion
            question={currentQuestion}
            selected={answers[currentQuestionIndex]}
            onSelect={handleAnswerSelect}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={currentQuiz.questions.length}
            onAudioPlay={handleAudioPlay}
          />

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
              disabled={currentQuestionIndex === 0}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={20} />
              <span>Previous</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">
                Audio played: {audioPlayCount} times
              </div>
              <div className="text-xs text-gray-500">
                Use audio to improve pronunciation
              </div>
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={answers[currentQuestionIndex] === undefined}
              className="flex items-center space-x-2 px-6 py-3 bg-[#133251] text-white rounded-lg hover:bg-[#0f2a42] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next'}
              </span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render results
  if (quizState === 'results' && quizResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 p-4">
        <div className="max-w-6xl mx-auto">
          <QuizResults
            results={quizResults.results}
            score={quizResults.score}
            total={quizResults.total}
            percentage={quizResults.percentage}
            difficulty={selectedDifficulty}
            onRetry={handleRetry}
            onNewQuiz={handleNewQuiz}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 p-4 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#133251] mx-auto mb-4"></div>
        <p className="text-gray-600">Loading quiz...</p>
      </div>
    </div>
  );
};

// Quiz History Component
const QuizHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const quizHistory = getQuizHistory();
    setHistory(quizHistory.slice(0, 5)); // Show last 5 results
  }, []);

  if (history.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No quiz history yet. Take your first quiz!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {history.map((result) => (
        <div key={result.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
              result.percentage >= 90 ? 'bg-green-500' :
              result.percentage >= 80 ? 'bg-blue-500' :
                      result.percentage >= 70 ? 'bg-cyan-500' :
        result.percentage >= 60 ? 'bg-[#133251]' : 'bg-red-500'
            }`}>
              {result.percentage}%
            </div>
            <div>
              <div className="font-semibold text-gray-800">
                {result.score}/{result.total} correct
              </div>
              <div className="text-sm text-gray-500">
                {new Date(result.timestamp).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 capitalize">
            {result.difficulty}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
