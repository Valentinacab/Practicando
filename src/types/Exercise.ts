export interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: 'fácil' | 'medio' | 'difícil';
  category: 'basico' | 'arrays' | 'objetos' | 'asincrono';
  code: string;
  tests: string;
  explanation: string;
  hints: string[];
  expectedResult: string;
}