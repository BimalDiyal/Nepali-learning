import React from "react";
import { DIFFICULTY_LEVELS, DIFFICULTY_CONFIG } from "../services/quizService";

const DifficultySelector = ({ selectedDifficulty, onDifficultyChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Difficulty Level</h2>
        <p className="text-gray-600">Select the difficulty that matches your current Nepali learning level</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.values(DIFFICULTY_LEVELS).map((difficulty) => {
          const config = DIFFICULTY_CONFIG[difficulty];
          const isSelected = selectedDifficulty === difficulty;
          
          return (
            <button
              key={difficulty}
              onClick={() => onDifficultyChange(difficulty)}
              className={`relative p-6 rounded-xl border-2 transition-all duration-200 text-left group hover:shadow-lg ${
                isSelected
                  ? `border-${config.color}-500 bg-${config.color}-50 shadow-lg`
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className={`w-6 h-6 bg-${config.color}-500 rounded-full flex items-center justify-center`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              )}

              {/* Difficulty Icon */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                isSelected ? `bg-${config.color}-500` : `bg-${config.color}-100`
              }`}>
                <div className={`text-xl font-bold ${
                  isSelected ? 'text-white' : `text-${config.color}-600`
                }`}>
                  {difficulty === DIFFICULTY_LEVELS.BEGINNER ? '1' : 
                   difficulty === DIFFICULTY_LEVELS.INTERMEDIATE ? '2' : '3'}
                </div>
              </div>

              {/* Difficulty Info */}
              <div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isSelected ? `text-${config.color}-800` : 'text-gray-800'
                }`}>
                  {config.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {config.description}
                </p>
                
                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Questions:</span>
                    <span className="font-medium">{config.minQuestions}-{config.maxQuestions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Time per question:</span>
                    <span className="font-medium">
                      {difficulty === DIFFICULTY_LEVELS.ADVANCED ? '45s' : 
                       difficulty === DIFFICULTY_LEVELS.INTERMEDIATE ? '35s' : '30s'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommended Badge */}
              {difficulty === DIFFICULTY_LEVELS.BEGINNER && (
                <div className="absolute top-3 left-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    Recommended
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">About Difficulty Levels</h4>
            <p className="text-sm text-gray-600">
              Each difficulty level includes audio pronunciation for all questions and answers. 
              Start with Beginner if you're new to Nepali, or choose a higher level if you're more experienced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelector; 