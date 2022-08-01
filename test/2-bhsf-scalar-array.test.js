const prodScalarArray = require('../src/2-bhsf-scalar-array');

describe("Tests Scalar Product Array", () => {
    test('when [1, 2, 3] product 2', () => {
        expect(prodScalarArray(2, [1, 2, 3].sort())).toEqual([2, 4, 6].sort());
    });

    test('when [5, 7, 8] product 6', () => {
        expect(prodScalarArray(6, [5, 7, 8].sort())).toEqual([30, 42, 48].sort());
    });

    test('when [1, 10, 7, 9, 17, 29] product 9', () => {
        expect(prodScalarArray(20, [1, 10, 7, 9, 17, 29].sort())).toEqual([20, 200, 140, 180, 340, 580].sort());
    });
});