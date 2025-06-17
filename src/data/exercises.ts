
import { Exercise } from '../types/Exercise';

export const exercises: Exercise[] = [
  {
    id: 1,
    title: "Suma de Números",
    description: "Crea una función que sume dos números y escribe pruebas para verificar su funcionamiento",
    difficulty: "fácil",
    category: "basico",
    code: `// Función a probar
function sumar(a, b) {
  return a + b;
}

module.exports = sumar;`,
    tests: `const sumar = require('./sumar');

describe('Función sumar', function () {
  test('debe sumar dos números positivos correctamente', function () {
    expect(sumar(2, 3)).toBe(5);
  });

  test('debe manejar números negativos', function () {
    expect(sumar(-1, 1)).toBe(0);
    expect(sumar(-2, -3)).toBe(-5);
  });

  test('debe manejar el cero', function () {
    expect(sumar(0, 5)).toBe(5);
    expect(sumar(0, 0)).toBe(0);
  });
});`,
    explanation: "Esta es una prueba básica que verifica si nuestra función de suma funciona correctamente. Usa describe, test y expect.",
    hints: [
      "Recuerda que toBe() compara valores primitivos",
      "Es importante probar casos límite como el cero",
      "Los números negativos también deben funcionar correctamente"
    ],
    expectedResult: "Todas las pruebas deben pasar ✅"
  },
  {
    id: 2,
    title: "Verificar si es Número",
    description: "Función que verifica si un valor es un número válido",
    difficulty: "fácil",
    category: "basico",
    code: `// Función a probar
function esNumero(valor) {
  return typeof valor === 'number' && !isNaN(valor);
}

module.exports = esNumero;`,
    tests: `const esNumero = require('./es-numero');

describe('Verificar si es número', function () {
  test('debe retornar true para números válidos', function () {
    expect(esNumero(5)).toBe(true);
    expect(esNumero(0)).toBe(true);
    expect(esNumero(-10)).toBe(true);
    expect(esNumero(3.14)).toBe(true);
  });

  test('debe retornar false para no números', function () {
    expect(esNumero('5')).toBe(false);
    expect(esNumero('hola')).toBe(false);
    expect(esNumero(null)).toBe(false);
    expect(esNumero(undefined)).toBe(false);
  });

  test('debe usar toBeTruthy y toBeFalsy', function () {
    expect(esNumero(42)).toBeTruthy();
    expect(esNumero('texto')).toBeFalsy();
  });
});`,
    explanation: "Esta prueba introduce los matchers toBeTruthy y toBeFalsy.",
    hints: [
      "toBeTruthy() es útil cuando solo importa si algo es verdadero",
      "toBeFalsy() verifica valores como false, 0, '', null, undefined",
      "NaN es técnicamente de tipo 'number' pero no es un número válido"
    ],
    expectedResult: "Identifica correctamente números válidos vs otros tipos"
  },
  {
    id: 3,
    title: "Comparar Edades",
    description: "Función que compara si una persona es mayor de edad",
    difficulty: "fácil",
    category: "basico",
    code: `// Función a probar
function esMayorDeEdad(edad) {
  return edad >= 18;
}

module.exports = esMayorDeEdad;`,
    tests: `const esMayorDeEdad = require('./mayor-edad');

describe('Verificar mayoría de edad', function () {
  test('debe usar toBe para casos exactos', function () {
    expect(esMayorDeEdad(18)).toBe(true);
    expect(esMayorDeEdad(17)).toBe(false);
  });

  test('debe usar toBeGreaterThan y toBeLessThan', function () {
    expect(25).toBeGreaterThan(18);
    expect(15).toBeLessThan(18);
  });

  test('debe verificar casos límite', function () {
    expect(esMayorDeEdad(18)).toBeTruthy();
    expect(esMayorDeEdad(17)).toBeFalsy();
    expect(esMayorDeEdad(100)).toBeTruthy();
  });
});`,
    explanation: "Esta prueba introduce comparaciones numéricas con toBeGreaterThan y toBeLessThan.",
    hints: [
      "18 años es exactamente la mayoría de edad",
      "toBeGreaterThan() no incluye el valor igual",
      "Combina diferentes matchers para pruebas más completas"
    ],
    expectedResult: "Determina correctamente la mayoría de edad"
  }
];
