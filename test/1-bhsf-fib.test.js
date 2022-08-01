const calcFibNumber = require('../src/1-bhsf-fib');

describe("Tests Fibonacci Numbers", () => {

    test('when index 6', () => {
        expect(calcFibNumber(6)).toBe(8);
    });

    test('when index 11', () => {
        expect(calcFibNumber(11)).toBe(89);
    });

    test('when index 20', () => {
        expect(calcFibNumber(20)).toBe(6765);
    });

    test('border case, when negative index -20', () => {
        expect(calcFibNumber(-20)).toBe(0);
    });
});