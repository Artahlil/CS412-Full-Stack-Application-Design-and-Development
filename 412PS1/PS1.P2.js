const evalnum = input => {
    if (input.includes('+')) {
        return(Number(input[0]) + Number(input[2]))
    }
    if (input.includes('-')) {
        return(Number(input[0]) - Number(input[2]))
    }
    if (input.includes('*')) {
        return(Number(input[0]) * Number(input[2]))
    }
    if (input.includes('/')) {
        return(Number(input[0]) / Number(input[2]))
    }
    if (input.includes('^')) {
        return(Number(input[0]) ** Number(input[2]))
    }
};
console.log(evalnum('4+2'));
console.log(evalnum('5*7'));
// console.log(evaluate('6-1'));
// console.log(evaluate('9/2'));
// console.log(evaluate('2^8'));
module.exports = {evalnum}
