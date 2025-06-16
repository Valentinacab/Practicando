import React, { useState } from 'react';
import { ArrowLeft, Code, TestTube, Lightbulb, CheckCircle, Copy, Eye, EyeOff } from 'lucide-react';
import { Exercise } from '../types/Exercise';

interface ExerciseDetailProps {
  exercise: Exercise;
  onBack: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

export const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  onBack,
  onComplete,
  isCompleted
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'tests' | 'explanation'>('code');
  const [showHints, setShowHints] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedTests, setCopiedTests] = useState(false);

  const copyToClipboard = async (text: string, type: 'code' | 'tests') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'code') {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } else {
        setCopiedTests(true);
        setTimeout(() => setCopiedTests(false), 2000);
      }
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const difficultyColors = {
    fácil: 'bg-green-100 text-green-800 border-green-200',
    medio: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    difícil: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 hover:bg-white rounded-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver a ejercicios</span>
          </button>
          
          {!isCompleted && (
            <button
              onClick={onComplete}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Marcar como completado</span>
            </button>
          )}
        </div>

        {/* Exercise Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{exercise.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{exercise.description}</p>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[exercise.difficulty]}`}>
                  {exercise.difficulty}
                </span>
                {isCompleted && (
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Completado</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Expected Result */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 mb-2">🎯 Resultado Esperado:</h3>
            <p className="text-blue-700">{exercise.expectedResult}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('code')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'code'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Code className="h-5 w-5 inline mr-2" />
                Código a Probar
              </button>
              <button
                onClick={() => setActiveTab('tests')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'tests'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <TestTube className="h-5 w-5 inline mr-2" />
                Pruebas Jest
              </button>
              <button
                onClick={() => setActiveTab('explanation')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === 'explanation'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Lightbulb className="h-5 w-5 inline mr-2" />
                Explicación
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'code' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Código JavaScript</h3>
                  <button
                    onClick={() => copyToClipboard(exercise.code, 'code')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      copiedCode 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Copy className="h-4 w-4" />
                    <span>{copiedCode ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm">
                  <code>{exercise.code}</code>
                </pre>
              </div>
            )}

            {activeTab === 'tests' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Pruebas con Jest</h3>
                  <button
                    onClick={() => copyToClipboard(exercise.tests, 'tests')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      copiedTests 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Copy className="h-4 w-4" />
                    <span>{copiedTests ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="bg-gray-900 text-blue-400 p-6 rounded-lg overflow-x-auto text-sm">
                  <code>{exercise.tests}</code>
                </pre>
              </div>
            )}

            {activeTab === 'explanation' && (
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {exercise.explanation}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hints */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={() => setShowHints(!showHints)}
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium mb-4"
          >
            {showHints ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            <span>{showHints ? 'Ocultar' : 'Mostrar'} Pistas ({exercise.hints.length})</span>
          </button>
          
          {showHints && (
            <div className="space-y-3">
              {exercise.hints.map((hint, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-orange-800">{hint}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};