const calcFibNumber = require('../src/1-bhsf-fib');

describe("Tests Fibonacci Numbers", () => {

    test('when index 6', () => {
        expect(calcFibNumber(6, 1, 0)).toBe(8);
    });

    test('when index 11', () => {
        expect(calcFibNumber(11, 1, 0)).toBe(89);
    });

    test('when index 20', () => {
        expect(calcFibNumber(20, 1, 0)).toBe(6765);
    });
});