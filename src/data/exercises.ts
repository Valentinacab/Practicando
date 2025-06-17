// sumar.js
function sumar(a, b) {
  return a + b;
}
module.exports = sumar;

// sumar.test.js
var sumar = require('./sumar');

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
});

// es-numero.js
function esNumero(valor) {
  return typeof valor === 'number' && !isNaN(valor);
}
module.exports = esNumero;

// es-numero.test.js
var esNumero = require('./es-numero');

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
});

// mayor-edad.js
function esMayorDeEdad(edad) {
  return edad >= 18;
}
module.exports = esMayorDeEdad;

// mayor-edad.test.js
var esMayorDeEdad = require('./mayor-edad');

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
});
