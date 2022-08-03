const fib1 = 1;
const fib0 = 0;

function calcFibNumber(term, val, prev)
{
    if(term == 0) return prev;
    return calcFibNumber(term - 1, val + prev, val);
}

const handler = (event, context) => {
    const body = JSON.parse(event.body);
    const fibResponse = calcFibNumber(body.fibNumber, fib1, fib0);
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
console.log('Response is ', response);

module.exports = calcFibNumber;