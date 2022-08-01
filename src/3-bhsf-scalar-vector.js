function prodScalarArray(scalar, arrayIn){
    return arrayIn.map( function(num) {return num * scalar});
}

let prodScalarPromise = function(scalar, arrayIn) {
    return new Promise((resolve,reject) => {

        let result = prodScalarArray(scalar, arrayIn);

        if (result) {
            resolve(result);
        }
        else {
            reject(Error(`problem with scalar ${scalar}, row [${arrayIn}]`));
        }
    });
};

const handler = (event, context) => {
    let resultVector = [];
    const body = JSON.parse(event.body);
    const {scalar, vector} = body;
    let promiseVector = vector.map(function (row) {return prodScalarPromise(scalar, row)});
    return Promise.allSettled(promiseVector).then((results) => results.forEach((resProm) => {
        resultVector.push(resProm.value);
    })).then(()=>{
        return {
            statusCode: 200,
            body:`With scalar ${scalar}, vector [${vector}] then result vector [${resultVector}]`
        }
    }).catch();
}

const event = {
    headers: {},
    body: JSON.stringify({
        scalar: 2,
        vector: [[2, 2], [5, -1], [0, 10]]
    })
};

handler(event).then((response) => {console.log('Response is ', response)});
module.exports = handler;
