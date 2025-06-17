
export const exercises = [
  {
    id: 1,
    title: "Suma de Números",
    description: "Crea una función que sume dos números y escribe pruebas para verificar su funcionamiento",
    difficulty: "fácil",
    category: "basico",
    code: "// Función a probar\nfunction sumar(a, b) {\n  return a + b;\n}\n\nmodule.exports = sumar;",
    tests: "const sumar = require('./sumar');\n\ndescribe('Función sumar', function () {\n  test('debe sumar dos números positivos correctamente', function () {\n    expect(sumar(2, 3)).toBe(5);\n  });\n\n  test('debe manejar números negativos', function () {\n    expect(sumar(-1, 1)).toBe(0);\n    expect(sumar(-2, -3)).toBe(-5);\n  });\n\n  test('debe manejar el cero', function () {\n    expect(sumar(0, 5)).toBe(5);\n    expect(sumar(0, 0)).toBe(0);\n  });\n});"
  },
  {
    id: 2,
    title: "Verificar si es Número",
    description: "Función que verifica si un valor es un número válido",
    difficulty: "fácil",
    category: "basico",
    code: "// Función a probar\nfunction esNumero(valor) {\n  return typeof valor === 'number' && !isNaN(valor);\n}\n\nmodule.exports = esNumero;",
    tests: "const esNumero = require('./es-numero');\n\ndescribe('Verificar si es número', function () {\n  test('debe retornar true para números válidos', function () {\n    expect(esNumero(5)).toBe(true);\n    expect(esNumero(0)).toBe(true);\n    expect(esNumero(-10)).toBe(true);\n    expect(esNumero(3.14)).toBe(true);\n  });\n\n  test('debe retornar false para no números', function () {\n    expect(esNumero('5')).toBe(false);\n    expect(esNumero('hola')).toBe(false);\n    expect(esNumero(null)).toBe(false);\n    expect(esNumero(undefined)).toBe(false);\n  });\n\n  test('debe usar toBeTruthy y toBeFalsy', function () {\n    expect(esNumero(42)).toBeTruthy();\n    expect(esNumero('texto')).toBeFalsy();\n  });\n});"
  },
  {
    id: 3,
    title: "Comparar Edades",
    description: "Función que compara si una persona es mayor de edad",
    difficulty: "fácil",
    category: "basico",
    code: "// Función a probar\nfunction esMayorDeEdad(edad) {\n  return edad >= 18;\n}\n\nmodule.exports = esMayorDeEdad;",
    tests: "const esMayorDeEdad = require('./mayor-edad');\n\ndescribe('Verificar mayoría de edad', function () {\n  test('debe usar toBe para casos exactos', function () {\n    expect(esMayorDeEdad(18)).toBe(true);\n    expect(esMayorDeEdad(17)).toBe(false);\n  });\n\n  test('debe usar toBeGreaterThan y toBeLessThan', function () {\n    expect(25).toBeGreaterThan(18);\n    expect(15).toBeLessThan(18);\n  });\n\n  test('debe verificar casos límite', function () {\n    expect(esMayorDeEdad(18)).toBeTruthy();\n    expect(esMayorDeEdad(17)).toBeFalsy();\n    expect(esMayorDeEdad(100)).toBeTruthy();\n  });\n});"
  },
  {
    id: 4,
    title: "Calcular Descuento",
    description: "Función que calcula descuentos con decimales",
    difficulty: "fácil",
    category: "basico",
    code: "// Función a probar\nfunction calcularDescuento(precio, porcentaje) {\n  var descuento = precio * (porcentaje / 100);\n  return precio - descuento;\n}\n\nmodule.exports = calcularDescuento;",
    tests: "const calcularDescuento = require('./descuento');\n\ndescribe('Calcular descuento', function () {\n  test('debe calcular descuentos exactos', function () {\n    expect(calcularDescuento(100, 10)).toBe(90);\n    expect(calcularDescuento(50, 20)).toBe(40);\n  });\n\n  test('debe usar toBeCloseTo para decimales', function () {\n    expect(calcularDescuento(33.33, 15)).toBeCloseTo(28.33, 2);\n    expect(calcularDescuento(99.99, 7.5)).toBeCloseTo(92.49, 2);\n  });\n\n  test('debe manejar casos sin descuento', function () {\n    expect(calcularDescuento(100, 0)).toBe(100);\n    expect(calcularDescuento(50, 0)).toBeTruthy();\n  });\n});"
  },
  {
    id: 5,
    title: "Filtrar Números Pares",
    description: "Crea una función que filtre solo los números pares de un array",
    difficulty: "fácil",
    category: "arrays",
    code: "// Función a probar\nfunction filtrarPares(numeros) {\n  var resultado = [];\n  for (var i = 0; i < numeros.length; i++) {\n    if (numeros[i] % 2 === 0) {\n      resultado.push(numeros[i]);\n    }\n  }\n  return resultado;\n}\n\nmodule.exports = filtrarPares;",
    tests: "const filtrarPares = require('./filtrar-pares');\n\ndescribe('Filtrar números pares', function () {\n  test('debe filtrar números pares correctamente', function () {\n    expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);\n  });\n\n  test('debe retornar array vacío si no hay pares', function () {\n    expect(filtrarPares([1, 3, 5, 7])).toEqual([]);\n  });\n\n  test('debe manejar arrays vacíos', function () {\n    expect(filtrarPares([])).toEqual([]);\n  });\n\n  test('debe manejar números negativos', function () {\n    expect(filtrarPares([-4, -3, -2, -1, 0, 1, 2])).toEqual([-4, -2, 0, 2]);\n  });\n});"
  },
  {
    id: 6,
    title: "Validar Contraseña",
    description: "Función que valida si una contraseña cumple criterios básicos",
    difficulty: "medio",
    category: "basico",
    code: `// Función a probar
function validarContrasena(password) {
  if (!password) {
    return false;
  }

  var tieneLongitud = password.length >= 8;
  var tieneNumero = false;
  var tieneMayuscula = false;

  for (var i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      tieneNumero = true;
      break;
    }
  }

  for (var i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
      tieneMayuscula = true;
      break;
    }
  }

  return tieneLongitud && tieneNumero && tieneMayuscula;
}

module.exports = validarContrasena;`,
    tests: `const validarContrasena = require('./validar-password');

describe('Validar contraseña', function() {
  test('debe validar contraseñas correctas', function() {
    expect(validarContrasena('MiPassword123')).toBe(true);
  });

  test('debe rechazar contraseñas inválidas', function() {
    expect(validarContrasena('corta')).toBeFalsy();
    expect(validarContrasena('sinmayuscula123')).toBeFalsy();
    expect(validarContrasena('SINNUMEROS')).toBeFalsy();
  });
});`,
    explanation: "Validación de contraseñas con múltiples condiciones usando bucles for.",
    hints: [
      "Debe tener al menos 8 caracteres",
      "Debe incluir al menos un número",
      "Debe contener al menos una mayúscula"
    ],
    expectedResult: "Valida correctamente las contraseñas"
  },
  {
    id: 7,
    title: "Información de Usuario",
    description: "Función que crea objetos de usuario con información completa",
    difficulty: "medio",
    category: "objetos",
    code: `// Función a probar
function crearUsuario(nombre, edad, email) {
  return {
    nombre: nombre,
    edad: edad,
    email: email,
    esMayorDeEdad: edad >= 18
  };
}

module.exports = crearUsuario;`,
    tests: `const crearUsuario = require('./crear-usuario');

describe('Crear usuario', function() {
  test('crea un objeto correctamente', function() {
    var usuario = crearUsuario('Ana', 25, 'ana@email.com');
    expect(usuario.nombre).toBe('Ana');
    expect(usuario.edad).toBe(25);
    expect(usuario.email).toBe('ana@email.com');
    expect(usuario.esMayorDeEdad).toBeTruthy();
  });
});`,
    explanation: "Crea un objeto con propiedades clave y verifica su contenido.",
    hints: [
      "Recuerda usar toEqual() para objetos completos",
      "Comprueba los valores individuales con toBe()"
    ],
    expectedResult: "Retorna un objeto con todos los datos correctos"
  },
  {
    id: 8,
    title: "Estadísticas de Array",
    description: "Función que calcula estadísticas básicas de un array de números",
    difficulty: "medio",
    category: "arrays",
    code: `// Función a probar
function calcularEstadisticas(numeros) {
  if (numeros.length === 0) {
    return { min: 0, max: 0, promedio: 0, total: 0 };
  }

  var min = numeros[0];
  var max = numeros[0];
  var total = 0;

  for (var i = 0; i < numeros.length; i++) {
    var n = numeros[i];
    if (n < min) min = n;
    if (n > max) max = n;
    total += n;
  }

  var promedio = total / numeros.length;
  return { min: min, max: max, promedio: promedio, total: total };
}

module.exports = calcularEstadisticas;`,
    tests: `const calcularEstadisticas = require('./estadisticas');

describe('Calcular estadísticas', function() {
  test('funciona con valores positivos', function() {
    var r = calcularEstadisticas([1, 2, 3]);
    expect(r.min).toBe(1);
    expect(r.max).toBe(3);
    expect(r.total).toBe(6);
    expect(r.promedio).toBe(2);
  });
});`,
    explanation: "Calcula min, max, total y promedio de un array de números.",
    hints: [
      "Usa un bucle para calcular todo manualmente",
      "toBeCloseTo es útil para decimales"
    ],
    expectedResult: "Devuelve todas las estadísticas correctamente"
  },
  {
    id: 9,
    title: "Validador de Email",
    description: "Crea una función que valide si un email tiene formato correcto",
    difficulty: "medio",
    category: "basico",
    code: `// Función a probar
function esEmailValido(email) {
  if (!email) return false;
  return email.includes('@') && email.includes('.');
}

module.exports = esEmailValido;`,
    tests: `const esEmailValido = require('./email');

describe('Validador de email', function() {
  test('emails válidos', function() {
    expect(esEmailValido('usuario@dominio.com')).toBe(true);
  });

  test('emails inválidos', function() {
    expect(esEmailValido('usuario.dominiocom')).toBe(false);
    expect(esEmailValido('usuario@dominiocom')).toBe(false);
  });
});`,
    explanation: "Comprueba si un string tiene '@' y '.' como validación mínima.",
    hints: [
      "Puedes usar includes() para comprobar texto",
      "No uses expresiones regulares en este nivel"
    ],
    expectedResult: "Detecta emails válidos o no válidos"
  }

];
