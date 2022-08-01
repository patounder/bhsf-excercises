const handler = require('../src/3-bhsf-scalar-vector');

const firstEvent = {
    headers: {},
    body: JSON.stringify({
        scalar: 2,
        vector: [[2, 2], [5, -1], [0, 10]]
    })
}

const secondEvent = {
    headers: {},
    body: JSON.stringify({
        scalar: 5,
        vector: [[2], [5], [0, 10]]
    })
}

const emptyVectorEvent = {
    headers: {},
    body: JSON.stringify({
        scalar: 9,
        vector: [[],[]]
    })
}

describe("Tests Scalar prod Vector", () => {

    test('when [[2, 2], [5, -1], [0, 10]] product 2', () => {
        return handler(firstEvent).then(data => {
            expect(data).toEqual({
                statusCode: 200,
                body:`With scalar 2, vector [2,2,5,-1,0,10] then result vector [4,4,10,-2,0,20]`
            });
        });
    });

    test('when [[],[]] product 9', () => {
        return handler(emptyVectorEvent).then(data => {
            expect(data).toEqual({
                statusCode: 200,
                body:`With scalar 9, vector [,] then result vector [,]`
            });
        });
    });

});