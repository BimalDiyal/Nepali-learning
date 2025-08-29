import React, { useState } from "react";
import { Volume2, Play, Pause } from "lucide-react";
import { speakText } from "../services/quizService";

const QuizQuestion = ({ 
  question, 
  selected, 
  onSelect, 
  questionNumber, 
  totalQuestions,
  onAudioPlay 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioPlay = (nepaliText) => {
    if (isPlaying) {
      // Stop current speech
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    // Use text-to-speech for Nepali words
    speakText(nepaliText);
    setIsPlaying(true);
    
    // Reset playing state after speech ends
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000); // Approximate time for speech
    
    onAudioPlay && onAudioPlay('option');
  };

  const formatQuestionNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      {/* Question Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            Question {formatQuestionNumber(questionNumber)} of {formatQuestionNumber(totalQuestions)}
          </div>
          <div className="text-sm text-gray-500">
            Daily Quiz • {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`relative p-6 rounded-xl border-2 transition-all duration-200 text-left group hover:shadow-md ${
              selected === index
                ? "border-orange-500 bg-orange-50 shadow-md"
                : "border-gray-200 hover:border-orange-300 bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Option Number */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  selected === index
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {String.fromCharCode(65 + index)} {/* A, B, C, D */}
                </div>
                
                {/* Option Text */}
                <span className="text-lg font-medium text-gray-800">
                  {option.text}
                </span>
              </div>
              
              {/* Audio Button for Nepali Option */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAudioPlay(option.text);
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-blue-100 hover:bg-blue-200"
              >
                {isPlaying ? <Pause size={16} className="text-blue-600" /> : <Volume2 size={16} className="text-blue-600" />}
              </button>
            </div>
            
            {/* Selection Indicator */}
            {selected === index && (
              <div className="absolute top-2 right-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Audio Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Volume2 size={20} className="text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Audio Features</h4>
            <p className="text-sm text-blue-700">
              Hover over Nepali answer options to hear their pronunciation using text-to-speech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
