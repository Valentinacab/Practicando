import React, { useState } from 'react';
import { Header } from './components/Header';
import { ExerciseCard } from './components/ExerciseCard';
import { ExerciseDetail } from './components/ExerciseDetail';
import { ProgressBar } from './components/ProgressBar';
import { exercises } from './data/exercises';
import { Exercise } from './types/Exercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', name: 'Todos los Ejercicios', icon: '🎯' },
    { id: 'basico', name: 'Funciones Básicas', icon: '🔤' },
    { id: 'arrays', name: 'Arrays y Listas', icon: '📋' },
    { id: 'objetos', name: 'Objetos', icon: '🏷️' },
    { id: 'asincrono', name: 'Código Asíncrono', icon: '⏱️' },
  ];

  const filteredExercises = selectedCategory === 'todos' 
    ? exercises 
    : exercises.filter(ex => ex.category === selectedCategory);

  const handleExerciseComplete = (exerciseId: number) => {
    setCompletedExercises(prev => new Set([...prev, exerciseId]));
  };

  const progressPercentage = (completedExercises.size / exercises.length) * 100;

  if (selectedExercise) {
    return (
      <ExerciseDetail
        exercise={selectedExercise}
        onBack={() => setSelectedExercise(null)}
        onComplete={() => handleExerciseComplete(selectedExercise.id)}
        isCompleted={completedExercises.has(selectedExercise.id)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🧪 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Jest Practice
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Domina las pruebas unitarias con Jest a través de ejercicios interactivos y divertidos
          </p>
          
          <ProgressBar 
            progress={progressPercentage}
            completed={completedExercises.size}
            total={exercises.length}
          />
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map(exercise => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              isCompleted={completedExercises.has(exercise.id)}
              onClick={() => setSelectedExercise(exercise)}
            />
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤔</div>
            <p className="text-gray-500 text-lg">
              No hay ejercicios en esta categoría todavía
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;