const handler = require('../src/3-bhsf-scalar-vector');

const event = {
    headers: {},
    body: JSON.stringify({
        scalar: 2,
        vector: [[2, 2], [5, -1], [0, 10]]
    })
}

describe("Tests Scalar prod Vector", () => {

    test('vector to double', () => {
        return handler(event).then(data => {
            expect(data).toEqual({
                statusCode: 200,
                body:`With scalar 2, vector [2,2,5,-1,0,10] then result vector [4,4,10,-2,0,20]`
            });
        });
    });
});