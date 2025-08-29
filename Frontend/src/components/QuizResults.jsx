import React, { useState } from "react";
import { Volume2, Play, Pause, Trophy, Target, Clock, RefreshCw } from "lucide-react";
import { playAudio, speakText } from "../services/quizService";

const QuizResults = ({ 
  results, 
  score, 
  total, 
  percentage, 
  difficulty,
  onRetry,
  onNewQuiz 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [showExplanations, setShowExplanations] = useState(false);

  const handleAudioPlay = (audioUrl, text) => {
    if (isPlaying && currentAudio) {
      currentAudio.pause();
      setIsPlaying(false);
      setCurrentAudio(null);
      return;
    }

    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentAudio(null);
      });
      
      audio.play().catch(error => {
        console.log('Audio playback failed:', error);
        speakText(text);
      });
      
      setIsPlaying(true);
      setCurrentAudio(audio);
    } else {
      speakText(text);
    }
  };

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Excellent! You're a Nepali language master!";
    if (percentage >= 80) return "Great job! You're making excellent progress!";
    if (percentage >= 70) return "Good work! Keep practicing to improve further!";
    if (percentage >= 60) return "Not bad! Review the explanations to learn more!";
    return "Keep practicing! Review the explanations and try again!";
  };

  const getPerformanceColor = () => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-blue-600";
    if (percentage >= 70) return "text-yellow-600";
    if (percentage >= 60) return "text-orange-600";
    return "text-red-600";
  };

  const getPerformanceIcon = () => {
    if (percentage >= 90) return <Trophy className="w-8 h-8 text-yellow-500" />;
    if (percentage >= 80) return <Target className="w-8 h-8 text-blue-500" />;
    return <Target className="w-8 h-8 text-gray-500" />;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      {/* Results Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          {getPerformanceIcon()}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
        <p className={`text-xl font-semibold ${getPerformanceColor()}`}>
          {getPerformanceMessage()}
        </p>
      </div>

      {/* Score Display */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">{score}</div>
            <div className="text-sm text-gray-600">Correct Answers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{total}</div>
            <div className="text-sm text-gray-600">Total Questions</div>
          </div>
          <div>
            <div className={`text-3xl font-bold ${getPerformanceColor()} mb-1`}>
              {percentage}%
            </div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                percentage >= 90 ? 'bg-green-500' :
                percentage >= 80 ? 'bg-blue-500' :
                percentage >= 70 ? 'bg-yellow-500' :
                percentage >= 60 ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={onRetry}
          className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-200 font-semibold flex items-center justify-center space-x-2"
        >
          <RefreshCw size={20} />
          <span>Try Again</span>
        </button>
        <button
          onClick={onNewQuiz}
          className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
        >
          New Quiz
        </button>
      </div>

      {/* Detailed Results Toggle */}
      <div className="mb-6">
        <button
          onClick={() => setShowExplanations(!showExplanations)}
          className="w-full bg-gray-50 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200 font-semibold"
        >
          {showExplanations ? 'Hide' : 'Show'} Detailed Results & Explanations
        </button>
      </div>

      {/* Detailed Results */}
      {showExplanations && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Question-by-Question Review</h3>
          
          {results.map((result, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${
                result.isCorrect
                  ? 'border-green-200 bg-green-50'
                  : 'border-red-200 bg-red-50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    result.isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-800">
                    {result.question}
                  </span>
                </div>
                
                {/* Audio Button for Explanation */}
                <button
                  onClick={() => handleAudioPlay(result.explanationAudio, result.explanation)}
                  className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  <span className="text-sm">Listen</span>
                </button>
              </div>
              
              <div className="ml-9 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Your answer:</span>
                  <span className={`text-sm font-medium ${
                    result.isCorrect ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {result.userAnswer !== undefined ? 
                      `Option ${String.fromCharCode(65 + result.userAnswer)}` : 
                      'Not answered'
                    }
                  </span>
                </div>
                
                {!result.isCorrect && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Correct answer:</span>
                    <span className="text-sm font-medium text-green-700">
                      Option {String.fromCharCode(65 + result.correctAnswer)}
                    </span>
                  </div>
                )}
                
                <div className="mt-3 p-3 bg-white rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Volume2 size={16} className="text-blue-600 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-gray-800">Explanation: </span>
                      <span className="text-sm text-gray-600">{result.explanation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quiz Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Difficulty: {difficulty}</span>
            <span>Date: {new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>Daily Quiz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults; 