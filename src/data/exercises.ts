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

describe('Función sumar', () => {
  test('debe sumar dos números positivos correctamente', function() {
    expect(sumar(2, 3)).toBe(5);
  });

  test('debe manejar números negativos', function() {
    expect(sumar(-1, 1)).toBe(0);
    expect(sumar(-2, -3)).toBe(-5);
  });

  test('debe manejar el cero', function() {
    expect(sumar(0, 5)).toBe(5);
    expect(sumar(0, 0)).toBe(0);
  });
});`,
    explanation: `Esta es una prueba básica que verifica si nuestra función de suma funciona correctamente. 

🔍 **Conceptos clave:**
- \`describe()\`: Agrupa las pruebas relacionadas
- \`test()\`: Define una prueba individual
- \`expect()\`: Verifica el resultado
- \`.toBe()\`: Compara valores exactos (primitivos)

Las pruebas cubren diferentes casos: números positivos, negativos y cero.`,
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

describe('Verificar si es número', () => {
  test('debe retornar true para números válidos', function() {
    expect(esNumero(5)).toBe(true);
    expect(esNumero(0)).toBe(true);
    expect(esNumero(-10)).toBe(true);
    expect(esNumero(3.14)).toBe(true);
  });

  test('debe retornar false para no números', function() {
    expect(esNumero('5')).toBe(false);
    expect(esNumero('hola')).toBe(false);
    expect(esNumero(null)).toBe(false);
    expect(esNumero(undefined)).toBe(false);
  });

  test('debe usar toBeTruthy y toBeFalsy', function() {
    expect(esNumero(42)).toBeTruthy();
    expect(esNumero('texto')).toBeFalsy();
  });
});`,
    explanation: `Esta prueba introduce los matchers \`.toBeTruthy()\` y \`.toBeFalsy()\`.

🔍 **Conceptos clave:**
- \`.toBe()\`: Comparación exacta
- \`.toBeTruthy()\`: Verifica que el valor sea "truthy"
- \`.toBeFalsy()\`: Verifica que el valor sea "falsy"
- Diferencia entre \`typeof\` y \`isNaN()\`

Los valores "truthy" son aquellos que se evalúan como verdaderos en un contexto booleano.`,
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

describe('Verificar mayoría de edad', () => {
  test('debe usar toBe para casos exactos', function() {
    expect(esMayorDeEdad(18)).toBe(true);
    expect(esMayorDeEdad(17)).toBe(false);
  });

  test('debe usar toBeGreaterThan y toBeLessThan', function() {
    expect(25).toBeGreaterThan(18);
    expect(15).toBeLessThan(18);
  });

  test('debe verificar casos límite', function() {
    expect(esMayorDeEdad(18)).toBeTruthy();
    expect(esMayorDeEdad(17)).toBeFalsy();
    expect(esMayorDeEdad(100)).toBeTruthy();
  });
});`,
    explanation: `Esta prueba introduce comparaciones numéricas con \`.toBeGreaterThan()\` y \`.toBeLessThan()\`.

🔍 **Conceptos clave:**
- \`.toBeGreaterThan()\`: Verifica que un número sea mayor que otro
- \`.toBeLessThan()\`: Verifica que un número sea menor que otro
- Casos límite (exactamente 18 años)
- Combinación de diferentes matchers

Es importante probar el valor exacto del límite (18) y valores por encima y debajo.`,
    hints: [
      "18 años es exactamente la mayoría de edad",
      "toBeGreaterThan() no incluye el valor igual",
      "Combina diferentes matchers para pruebas más completas"
    ],
    expectedResult: "Determina correctamente la mayoría de edad"
  },
  {
    id: 4,
    title: "Calcular Descuento",
    description: "Función que calcula descuentos con decimales",
    difficulty: "fácil",
    category: "basico",
    code: `// Función a probar
function calcularDescuento(precio, porcentaje) {
  var descuento = precio * (porcentaje / 100);
  return precio - descuento;
}

module.exports = calcularDescuento;`,
    tests: `const calcularDescuento = require('./descuento');

describe('Calcular descuento', () => {
  test('debe calcular descuentos exactos', function() {
    expect(calcularDescuento(100, 10)).toBe(90);
    expect(calcularDescuento(50, 20)).toBe(40);
  });

  test('debe usar toBeCloseTo para decimales', function() {
    expect(calcularDescuento(33.33, 15)).toBeCloseTo(28.33, 2);
    expect(calcularDescuento(99.99, 7.5)).toBeCloseTo(92.49, 2);
  });

  test('debe manejar casos sin descuento', function() {
    expect(calcularDescuento(100, 0)).toBe(100);
    expect(calcularDescuento(50, 0)).toBeTruthy();
  });
});`,
    explanation: `Esta prueba introduce \`.toBeCloseTo()\` para manejar números decimales.

🔍 **Conceptos clave:**
- \`.toBeCloseTo()\`: Compara números decimales con precisión
- El segundo parámetro indica cuántos decimales considerar
- Diferencia entre \`.toBe()\` y \`.toBeCloseTo()\`
- Manejo de operaciones matemáticas con decimales

JavaScript puede tener imprecisiones con decimales, por eso \`toBeCloseTo()\` es esencial.`,
    hints: [
      "toBeCloseTo() evita problemas de precisión decimal",
      "El segundo parámetro (2) significa 2 decimales de precisión",
      "Para cálculos exactos usa toBe(), para decimales usa toBeCloseTo()"
    ],
    expectedResult: "Calcula descuentos correctos, incluso con decimales"
  },
  {
    id: 5,
    title: "Filtrar Números Pares",
    description: "Crea una función que filtre solo los números pares de un array",
    difficulty: "fácil",
    category: "arrays",
    code: `// Función a probar
function filtrarPares(numeros) {
  var resultado = [];
  
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      resultado.push(numeros[i]);
    }
  }
  
  return resultado;
}

module.exports = filtrarPares;`,
    tests: `const filtrarPares = require('./filtrar-pares');

describe('Filtrar números pares', () => {
  test('debe filtrar números pares correctamente', function() {
    expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test('debe retornar array vacío si no hay pares', function() {
    expect(filtrarPares([1, 3, 5, 7])).toEqual([]);
  });

  test('debe manejar arrays vacíos', function() {
    expect(filtrarPares([])).toEqual([]);
  });

  test('debe manejar números negativos', function() {
    expect(filtrarPares([-4, -3, -2, -1, 0, 1, 2])).toEqual([-4, -2, 0, 2]);
  });
});`,
    explanation: `Esta prueba introduce \`.toEqual()\` para comparar arrays.

🔍 **Conceptos clave:**
- \`.toEqual()\`: Compara arrays y objetos (comparación profunda)
- Diferencia entre \`.toBe()\` y \`.toEqual()\`
- Pruebas con arrays vacíos
- Manejo de números negativos y cero
- Uso de bucle for tradicional para recorrer arrays

\`.toBe()\` compara referencias, \`.toEqual()\` compara contenido.`,
    hints: [
      "toEqual() es mejor que toBe() para arrays y objetos",
      "El cero (0) se considera un número par",
      "Un array vacío debe retornar otro array vacío",
      "Usa bucle for para recorrer el array manualmente"
    ],
    expectedResult: "Debe retornar arrays con solo números pares"
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
  
  // Verificar si tiene número
  for (var i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      tieneNumero = true;
      break;
    }
  }
  
  // Verificar si tiene mayúscula
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

describe('Validar contraseña', () => {
  test('debe validar contraseñas correctas', function() {
    expect(validarContrasena('MiPassword123')).toBe(true);
    expect(validarContrasena('Segura1')).toBeFalsy(); // muy corta
  });

  test('debe rechazar contraseñas inválidas', function() {
    expect(validarContrasena('corta')).toBeFalsy();
    expect(validarContrasena('sinmayuscula123')).toBeFalsy();
    expect(validarContrasena('SINNUMEROS')).toBeFalsy();
  });

  test('debe manejar casos especiales', function() {
    expect(validarContrasena('')).toBeFalsy();
    expect(validarContrasena(null)).toBeFalsy();
    expect(validarContrasena(undefined)).toBeFalsy();
  });

  test('debe verificar longitud mínima', function() {
    expect('MiPassword123'.length).toBeGreaterThan(8);
    expect('corta'.length).toBeLessThan(8);
  });
});`,
    explanation: `Esta prueba combina múltiples matchers y valida criterios complejos usando bucles for.

🔍 **Conceptos clave:**
- Combinación de \`.toBe()\`, \`.toBeFalsy()\`, \`.toBeGreaterThan()\`
- Validación manual con bucles for
- Manejo de valores nulos y undefined
- Pruebas de criterios múltiples
- Comparación de caracteres con rangos ASCII

Una buena contraseña debe cumplir TODOS los criterios simultáneamente.`,
    hints: [
      "Una contraseña válida necesita longitud, número Y mayúscula",
      "toBeFalsy() es útil para casos que deben fallar",
      "Usa bucles for para verificar cada carácter manualmente",
      "Compara caracteres con rangos: '0'-'9' para números, 'A'-'Z' para mayúsculas"
    ],
    expectedResult: "Valida contraseñas según criterios de seguridad"
  },
  {
    id: 7,
    title: "Información de Usuario",
    description: "Función que crea objetos de usuario con información completa",
    difficulty: "medio",
    category: "objetos",
    code: `// Función a probar
function crearUsuario(nombre, edad, email) {
  var fechaHoy = new Date();
  var fechaString = fechaHoy.getFullYear() + '-';
  
  var mes = fechaHoy.getMonth() + 1;
  if (mes < 10) {
    fechaString += '0' + mes;
  } else {
    fechaString += mes;
  }
  
  fechaString += '-';
  
  var dia = fechaHoy.getDate();
  if (dia < 10) {
    fechaString += '0' + dia;
  } else {
    fechaString += dia;
  }
  
  return {
    nombre: nombre,
    edad: edad,
    email: email,
    esMayorDeEdad: edad >= 18,
    fechaCreacion: fechaString
  };
}

module.exports = crearUsuario;`,
    tests: `const crearUsuario = require('./crear-usuario');

describe('Crear usuario', () => {
  test('debe crear objeto usuario correctamente', function() {
    var usuario = crearUsuario('Ana', 25, 'ana@email.com');
    
    expect(usuario.nombre).toBe('Ana');
    expect(usuario.edad).toBe(25);
    expect(usuario.email).toBe('ana@email.com');
  });

  test('debe verificar mayoría de edad correctamente', function() {
    var mayor = crearUsuario('Juan', 20, 'juan@email.com');
    var menor = crearUsuario('Luis', 16, 'luis@email.com');
    
    expect(mayor.esMayorDeEdad).toBeTruthy();
    expect(menor.esMayorDeEdad).toBeFalsy();
  });

  test('debe comparar objetos completos', function() {
    var usuario1 = crearUsuario('María', 30, 'maria@email.com');
    var usuario2 = crearUsuario('María', 30, 'maria@email.com');
    
    // No usar toBe() para objetos
    expect(usuario1).toEqual(usuario2);
  });

  test('debe verificar propiedades numéricas', function() {
    var usuario = crearUsuario('Pedro', 45, 'pedro@email.com');
    
    expect(usuario.edad).toBeGreaterThan(18);
    expect(usuario.edad).toBeLessThan(100);
  });
});`,
    explanation: `Esta prueba trabaja con objetos y combina múltiples matchers.

🔍 **Conceptos clave:**
- \`.toEqual()\` para comparar objetos completos
- Acceso a propiedades de objetos
- Combinación de \`.toBeTruthy()\`, \`.toBeFalsy()\`
- \`.toBeGreaterThan()\` y \`.toBeLessThan()\` con propiedades
- Formateo manual de fechas con concatenación de strings

NUNCA uses \`.toBe()\` para comparar objetos, siempre \`.toEqual()\`.`,
    hints: [
      "toBe() compara referencias, toEqual() compara contenido",
      "Puedes acceder a propiedades del objeto en las pruebas",
      "Combina diferentes matchers para pruebas más completas",
      "El formateo de fecha se hace manualmente con concatenación"
    ],
    expectedResult: "Crea objetos usuario con todas las propiedades correctas"
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
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
    total = total + numeros[i];
  }
  
  var promedio = total / numeros.length;
  
  return { min: min, max: max, promedio: promedio, total: total };
}

module.exports = calcularEstadisticas;`,
    tests: `const calcularEstadisticas = require('./estadisticas');

describe('Calcular estadísticas', () => {
  test('debe calcular estadísticas correctamente', function() {
    var stats = calcularEstadisticas([1, 2, 3, 4, 5]);
    
    expect(stats.min).toBe(1);
    expect(stats.max).toBe(5);
    expect(stats.total).toBe(15);
    expect(stats.promedio).toBe(3);
  });

  test('debe usar comparaciones numéricas', function() {
    var stats = calcularEstadisticas([10, 20, 30]);
    
    expect(stats.max).toBeGreaterThan(stats.min);
    expect(stats.promedio).toBeGreaterThan(15);
    expect(stats.promedio).toBeLessThan(25);
  });

  test('debe manejar decimales correctamente', function() {
    var stats = calcularEstadisticas([1, 2, 4]);
    
    expect(stats.promedio).toBeCloseTo(2.33, 2);
    expect(stats.total).toBe(7);
  });

  test('debe manejar arrays vacíos', function() {
    var stats = calcularEstadisticas([]);
    
    expect(stats).toEqual({ min: 0, max: 0, promedio: 0, total: 0 });
    expect(stats.min).toBeFalsy(); // 0 es falsy
  });
});`,
    explanation: `Esta prueba combina todos los matchers aprendidos en un ejercicio más complejo usando algoritmos manuales.

🔍 **Conceptos clave:**
- \`.toEqual()\` para objetos completos
- \`.toBeCloseTo()\` para decimales
- \`.toBeGreaterThan()\` y \`.toBeLessThan()\` para comparaciones
- \`.toBeFalsy()\` con el valor 0
- Manejo de casos límite (arrays vacíos)
- Algoritmos manuales con bucles for para encontrar min, max y suma

Este ejercicio integra todos los conceptos aprendidos anteriormente.`,
    hints: [
      "Combina múltiples matchers en una sola prueba",
      "toBeCloseTo() es esencial para promedios con decimales",
      "El valor 0 es falsy, úsalo para verificar casos límite",
      "Usa bucle for para recorrer y calcular todo manualmente"
    ],
    expectedResult: "Calcula min, max, promedio y total correctamente"
  },
  {
    id: 9,
    title: "Validador de Email",
    description: "Crea una función que valide si un email tiene formato correcto",
    difficulty: "medio",
    category: "basico",
    code: `// Función a probar
function esEmailValido(email) {
  if (!email) {
    return false;
  }
  
  var tieneLongitudAdecuada = email.length >= 5 && email.length <= 50;
  if (!tieneLongitudAdecuada) {
    return false;
  }
  
  var tieneArroba = false;
  var tienePunto = false;
  var posicionArroba = -1;
  
  // Buscar @ y verificar que no esté al inicio o final
  for (var i = 1; i < email.length - 1; i++) {
    if (email[i] === '@') {
      if (tieneArroba) {
        return false; // Más de una @
      }
      tieneArroba = true;
      posicionArroba = i;
    }
  }
  
  if (!tieneArroba) {
    return false;
  }
  
  // Buscar punto después de @
  for (var i = posicionArroba + 2; i < email.length; i++) {
    if (email[i] === '.') {
      tienePunto = true;
      break;
    }
  }
  
  return tienePunto;
}

module.exports = esEmailValido;`,
    tests: `const esEmailValido = require('./email');

describe('Validador de Email', () => {
  test('debe validar emails correctos', function() {
    expect(esEmailValido('test@ejemplo.com')).toBe(true);
    expect(esEmailValido('usuario.nombre@dominio.org')).toBeTruthy();
  });

  test('debe rechazar emails inválidos', function() {
    expect(esEmailValido('email-sin-arroba.com')).toBe(false);
    expect(esEmailValido('email@')).toBeFalsy();
    expect(esEmailValido('@dominio.com')).toBeFalsy();
  });

  test('debe verificar longitud del email', function() {
    expect('test@ejemplo.com'.length).toBeGreaterThan(5);
    expect('test@ejemplo.com'.length).toBeLessThan(50);
    expect(esEmailValido('a@b.c')).toBeFalsy(); // muy corto
  });

  test('debe manejar casos especiales', function() {
    expect(esEmailValido('')).toBeFalsy();
    expect(esEmailValido(null)).toBeFalsy();
    expect(esEmailValido(undefined)).toBeFalsy();
  });
});`,
    explanation: `Esta prueba avanzada combina validación de formato y longitud usando algoritmos manuales.

🔍 **Conceptos clave:**
- Combinación de \`.toBe()\` y \`.toBeTruthy()\`/\`.toBeFalsy()\`
- \`.toBeGreaterThan()\` y \`.toBeLessThan()\` para longitudes
- Validación manual con bucles for
- Manejo de valores nulos y undefined
- Búsqueda de caracteres específicos en strings

Un email válido debe cumplir formato Y longitud adecuada usando solo algoritmos básicos.`,
    hints: [
      "Un email válido debe tener @ y al menos un punto después de @",
      "Verifica tanto el formato como la longitud manualmente",
      "Los valores null y undefined deben retornar false",
      "Usa bucles for para buscar caracteres específicos en el string"
    ],
    expectedResult: "Valida emails considerando formato y longitud"
  }
];
