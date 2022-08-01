function calcFibNumber(fibPosition) {

    if(fibPosition <= 0) return 0;

    switch(fibPosition){
        case 1:
            return 1;
        default:
            return calcFibNumber(fibPosition - 1) + calcFibNumber(fibPosition - 2);
    }
}
const handler = (event, context) => {
    const body = JSON.parse(event.body);
    const fibResponse = calcFibNumber(body.fibNumber);
    return {
        statusCode: 200,
        body:`Fibonacci number for index ${body.fibNumber} is ${fibResponse}`};
}

const event = {
    headers: {},
    body: JSON.stringify({
        fibNumber: 14
    })
};

const response = handler(event);
//console.log('Response is ', response);

module.exports = calcFibNumber;