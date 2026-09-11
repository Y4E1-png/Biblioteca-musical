const { sumArray, countWords, findMax, isDivisible } = require('../../functions');



describe('sumArray', () => {
    test('suma un arreglo de números positivos', () => {
        expect(sumArray([1, 2, 3, 4])).toBe(10);
    });

    test('suma un arreglo de números negativos', () => {
        expect(sumArray([-1, -2, -3, -4])).toBe(-10);
    });

    test('retorna 0 cuando el arreglo está vacío', () => {
        expect(sumArray([])).toBe(0);
    });

    test('suma un arreglo que incluye 0', () => {
        expect(sumArray([5, 0, 3])).toBe(8);
    });
});


describe('countWords', () => {
    test('cuenta palabras en una cadena normal', () => {
        expect(countWords('Hola mundo esto es una prueba')).toBe(6);
    });

    test('ignora espacios al inicio y al final', () => {
        expect(countWords('   Hola mundo   ')).toBe(2);
    });

    test('retorna 0 cuando la cadena está vacía', () => {
        expect(countWords('')).toBe(0);
    });

    test('ignora espacios consecutivos entre palabras', () => {
        expect(countWords('Hola   mundo   desde   Jest')).toBe(4);
    });
});


describe('findMax', () => {
    test('encuentra el número mayor en un arreglo de positivos', () => {
        expect(findMax([5, 2, 9, 3])).toBe(9);
    });

    test('encuentra el número mayor en un arreglo de negativos', () => {
        expect(findMax([-8, -3, -12, -5])).toBe(-3);
    });

    test('retorna null cuando el arreglo está vacío', () => {
        expect(findMax([])).toBe(null);
    });

    test('retorna el valor cuando todos los números son iguales', () => {
        expect(findMax([7, 7, 7, 7])).toBe(7);
    });
});

describe('isDivisible', () => {
    test('retorna true cuando los números son divisibles', () => {
        expect(isDivisible(10, 2)).toBe(true);
    });

    test('retorna false cuando los números no son divisibles', () => {
        expect(isDivisible(10, 3)).toBe(false);
    });

    test('retorna un mensaje cuando el divisor es 0', () => {
        expect(isDivisible(10, 0)).toBe('No se puede dividir entre cero');
    });

    test('funciona con números negativos', () => {
        expect(isDivisible(-10, -2)).toBe(true);
    });
});    