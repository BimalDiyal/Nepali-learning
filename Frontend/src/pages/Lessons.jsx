import { useState, useEffect } from "react";
import { Keyboard, PenTool, BookOpen, CheckCircle, Play, Volume2, Star, Book, ChevronLeft, ChevronRight, HelpCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllLessons, saveProgress, getAllProgress, nepaliLessons } from "../services/lessonService";

// Helper for TTS
const speakNepali = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'ne-NP';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const difficultyOrder = ["Beginner", "Intermediate", "Advanced"];
const difficultyColors = {
  Beginner: "bg-green-100 text-green-700 border-green-300",
  Intermediate: "bg-cyan-100 text-cyan-700 border-cyan-300",
  Advanced: "bg-red-100 text-red-700 border-red-300"
};
const difficultyIcons = {
  Beginner: <Star className="w-5 h-5 text-green-500" />, 
  Intermediate: <Star className="w-5 h-5 text-cyan-500" />, 
  Advanced: <Star className="w-5 h-5 text-red-500" />
};

const Lessons = () => {
  const [selectedCategory, setSelectedCategory] = useState("typing");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [progress, setProgress] = useState({});
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [lessonsData, setLessonsData] = useState([]);

  useEffect(() => {
    // Use local lessons data instead of fetching from backend
    setLessonsData(Object.values(nepaliLessons).flatMap(category => category.lessons));
    // Initialize progress as empty object since we don't have backend
    setProgress({});
  }, []);

  useEffect(() => {
    let interval;
    if (isTyping && currentLesson) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTyping, currentLesson]);

  const startLesson = (lesson) => {
    setCurrentLesson(lesson);
    setUserInput("");
    setScore(0);
    setShowHint(false);
    setIsTyping(true);
    setTimer(0);
    setExerciseIndex(0);
  };

  const checkAnswer = async () => {
    if (currentLesson && currentLesson.exercises) {
      const currentExercise = currentLesson.exercises[exerciseIndex];
      if (userInput.toLowerCase().trim() === currentExercise.answer.toLowerCase()) {
        const newScore = score + 1;
        setScore(newScore);
        setUserInput("");
        setShowHint(false);
        if (exerciseIndex + 1 < currentLesson.exercises.length) {
          setExerciseIndex(exerciseIndex + 1);
        } else {
          setIsTyping(false);
          // Store progress locally instead of backend
          const newProgress = { ...progress };
          newProgress[currentLesson.id] = { score: newScore, total: currentLesson.exercises.length, completed: true };
          setProgress(newProgress);
          alert("Congratulations! You've completed this lesson!");
        }
      } else {
        setShowHint(true);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = (lessonId) => {
    const lessonProgress = progress[lessonId];
    if (!lessonProgress) return 0;
    return Math.round((lessonProgress.score / lessonProgress.total) * 100);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "typing": return <Keyboard className="w-8 h-8" />;
      case "writing": return <PenTool className="w-8 h-8" />;
      case "vocabulary": return <BookOpen className="w-8 h-8" />;
      default: return <Book className="w-8 h-8" />;
    }
  };

  // Group lessons by difficulty
  const groupLessonsByDifficulty = (lessons) => {
    const groups = { Beginner: [], Intermediate: [], Advanced: [] };
    lessons.forEach(lesson => {
      if (groups[lesson.difficulty]) groups[lesson.difficulty].push(lesson);
    });
    return groups;
  };

  // Main grid view
  const renderLessonGrid = () => {
    const lessons = nepaliLessons[selectedCategory].lessons;
    const grouped = groupLessonsByDifficulty(lessons);
    return (
      <div className="space-y-12">
        {difficultyOrder.map(level => (
          grouped[level].length > 0 && (
            <div key={level}>
              <div className="flex items-center gap-3 mb-4">
                {difficultyIcons[level]}
                <h2 className={`text-2xl font-bold ${difficultyColors[level]}`}>{level} Level</h2>
                <div className="h-px flex-1 bg-gray-200 ml-2"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {grouped[level].map((lesson) => {
                  const progressPercent = getProgressPercentage(lesson.id);
                  const isCompleted = progress[lesson.id]?.completed;
                  return (
                    <div key={lesson.id} className={`relative bg-white p-6 rounded-2xl border-2 shadow-md hover:shadow-xl transition-all ${difficultyColors[level]}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {getCategoryIcon(selectedCategory)}
                          <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
                        </div>
                        {isCompleted && <CheckCircle className="w-6 h-6 text-green-500" />}
                      </div>
                      <p className="text-gray-700 mb-4">{lesson.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${difficultyColors[level]}`}>{lesson.difficulty}</span>
                        <span className="text-sm text-gray-500">
                          {lesson.exercises?.length || lesson.characters?.length || lesson.words?.length} items
                        </span>
                      </div>
                      {progressPercent > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{progressPercent}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-[#133251] h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                          </div>
                        </div>
                      )}
                      <button
                        onClick={() => startLesson(lesson)}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
                      >
                        <Play className="w-5 h-5" />
                        {isCompleted ? "Practice Again" : "Start Lesson"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        ))}
      </div>
    );
  };

  // Lesson view (with audio for every Nepali word/char/sentence)
  const renderLessonView = () => {
    const lesson = currentLesson;
    const isTypingLesson = !!lesson.exercises;
    const isWritingLesson = !!lesson.characters;
    const isWordLesson = !!lesson.words;
    // Typing
    if (isTypingLesson) {
      const currentExercise = lesson.exercises[exerciseIndex];
      return (
        <div className="max-w-2xl mx-auto">
          <button className="mb-6 flex items-center gap-2 text-orange-600 hover:underline" onClick={() => setCurrentLesson(null)}>
            <ChevronLeft /> Back to Lessons
          </button>
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-6">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">{lesson.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${difficultyColors[lesson.difficulty]}`}>{lesson.difficulty}</span>
              <span className="text-sm text-gray-500">{exerciseIndex + 1} / {lesson.exercises.length}</span>
              <span className="flex items-center gap-1 text-gray-500"><Clock className="w-4 h-4" /> {formatTime(timer)}</span>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">{currentExercise.nepali}</span>
                <button onClick={() => speakNepali(currentExercise.nepali)} className="p-2 rounded-full bg-blue-100 hover:bg-blue-200">
                  <Volume2 className="w-5 h-5 text-blue-600" />
                </button>
              </div>
              <div className="text-gray-700 mb-2">{currentExercise.english}</div>
              {showHint && <div className="text-sm text-orange-600 mb-2">Hint: {currentExercise.hint}</div>}
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:border-orange-500"
                placeholder="Type your answer..."
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={!isTyping}
              />
              <div className="flex gap-2 mt-4">
                <button
                  onClick={checkAnswer}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
                  disabled={!userInput}
                >
                  Check
                </button>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg"
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setExerciseIndex(Math.max(0, exerciseIndex - 1))}
                disabled={exerciseIndex === 0}
                className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button
                onClick={() => setExerciseIndex(Math.min(lesson.exercises.length - 1, exerciseIndex + 1))}
                disabled={exerciseIndex === lesson.exercises.length - 1}
                className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      );
    }
    // Writing
    if (isWritingLesson) {
      return (
        <div className="max-w-2xl mx-auto">
          <button className="mb-6 flex items-center gap-2 text-orange-600 hover:underline" onClick={() => setCurrentLesson(null)}>
            <ChevronLeft /> Back to Lessons
          </button>
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-6">
            <div className="flex items-center gap-3 mb-2">
              <PenTool className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">{lesson.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <div className="flex flex-col gap-6">
              {lesson.characters.map((char, idx) => (
                <div key={idx} className="flex items-center gap-6 bg-gray-50 p-4 rounded-xl">
                  <span className="text-3xl font-bold text-gray-900">{char.char}</span>
                  <button onClick={() => speakNepali(char.char)} className="p-2 rounded-full bg-blue-100 hover:bg-blue-200">
                    <Volume2 className="w-5 h-5 text-blue-600" />
                  </button>
                  <div className="flex-1">
                    <div className="text-gray-700 font-semibold mb-1">How to write:</div>
                    <ol className="list-decimal list-inside text-gray-600 text-sm">
                      {char.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    // Vocabulary
    if (isWordLesson) {
      return (
        <div className="max-w-2xl mx-auto">
          <button className="mb-6 flex items-center gap-2 text-orange-600 hover:underline" onClick={() => setCurrentLesson(null)}>
            <ChevronLeft /> Back to Lessons
          </button>
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-6">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">{lesson.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <div className="grid gap-4">
              {lesson.words.map((word, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <span className="text-2xl font-bold text-gray-900">{word.nepali}</span>
                  <button onClick={() => speakNepali(word.nepali)} className="p-2 rounded-full bg-blue-100 hover:bg-blue-200">
                    <Volume2 className="w-5 h-5 text-blue-600" />
                  </button>
                  <div className="flex-1">
                    <div className="text-gray-700 font-semibold">{word.english} <span className="text-gray-400 ml-2">({word.romanized})</span></div>
                    <div className="text-gray-500 text-sm">{word.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-orange-500" /> Nepali Lessons
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Start from the basics and progress to advanced Nepali, just like a real book. Every word and sentence has audio for perfect pronunciation!
          </p>
          <Link
            to="/quiz"
            className="absolute right-0 top-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-colors text-lg"
            style={{ marginTop: "1.5rem", marginRight: "1.5rem" }}
          >
            <HelpCircle className="w-6 h-6" /> Ready for Quiz?
          </Link>
        </div>
        {/* Category Selection */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          {Object.entries(nepaliLessons).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex flex-col items-center gap-2 px-8 py-4 rounded-2xl border-2 shadow-md transition-all text-lg font-semibold ${selectedCategory === key ? 'bg-orange-500 text-white border-orange-600 shadow-lg scale-105' : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-orange-400'}`}
            >
              {getCategoryIcon(key)}
              {category.title}
            </button>
          ))}
        </div>
        {/* Main Content */}
        {!currentLesson ? renderLessonGrid() : renderLessonView()}
      </div>
    </div>
  );
};

export default Lessons;
