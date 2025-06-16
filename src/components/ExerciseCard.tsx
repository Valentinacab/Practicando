import React from 'react';
import { CheckCircle, Clock, Star, ArrowRight } from 'lucide-react';
import { Exercise } from '../types/Exercise';

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted: boolean;
  onClick: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  isCompleted,
  onClick
}) => {
  const difficultyColors = {
    fácil: 'bg-green-100 text-green-800 border-green-200',
    medio: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    difícil: 'bg-red-100 text-red-800 border-red-200'
  };

  const categoryIcons = {
    basico: '🔤',
    arrays: '📋',
    objetos: '🏷️',
    asincrono: '⏱️'
  };

  return (
    <div
      onClick={onClick}
      className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
        isCompleted 
          ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg' 
          : 'bg-white border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg'
      }`}
    >
      {isCompleted && (
        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
          <CheckCircle className="h-5 w-5 text-white" />
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{categoryIcons[exercise.category]}</span>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{exercise.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${difficultyColors[exercise.difficulty]}`}>
                {exercise.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">
        {exercise.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>5-10 min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4" />
            <span>{exercise.hints.length} pistas</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-blue-600 font-medium">
          <span>Practicar</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};