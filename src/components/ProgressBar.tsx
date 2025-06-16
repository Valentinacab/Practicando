import React from 'react';
import { Trophy } from 'lucide-react';

interface ProgressBarProps {
  progress: number;
  completed: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  completed,
  total
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="font-semibold text-gray-800">Tu Progreso</span>
        </div>
        <span className="text-sm font-medium text-gray-600">
          {completed} de {total} completados
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="text-center">
        <span className="text-2xl font-bold text-gray-800">{Math.round(progress)}%</span>
        <p className="text-sm text-gray-500">
          {progress === 100 ? '¡Felicidades! 🎉' : 'Sigue así, vas muy bien! 💪'}
        </p>
      </div>
    </div>
  );
};