function prodScalarArray(scalar, arrayIn){
    return arrayIn.map( function(num) {return num * scalar});
}

const handler = (event, context) => {
    const body = JSON.parse(event.body);
    const {scalar, arrayInput} = body;
    const resultArray = prodScalarArray(scalar, arrayInput);
    return {
        statusCode: 200,
        body:`With scalar ${scalar}, arrayInput [${arrayInput}], then result array [${resultArray}]`
    };
}

const event = {
    headers: {},
    body: JSON.stringify({
        scalar: 20,
        arrayInput: [1, 10, 7, 9, 17, 29]
    })
};

const response = handler(event);
//console.log('Response is ', response);

module.exports = prodScalarArray;
