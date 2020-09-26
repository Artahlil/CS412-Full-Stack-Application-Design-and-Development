const evaluate = input => {
    if (input.includes('+')) {
        return(Number(input[0]) + Number(input[2]))
    }
    if (input.includes('*')) {
        return(Number(input[0]) * Number(input[2]))
    }
    if (input.includes('-')) {
        return(Number(input[0]) - Number(input[2]))
    }
    if (input.includes('/')) {
        return(Number(input[0]) / Number(input[2]))
    }
    if (input.includes('^')) {
        return(Number(input[0]) ** Number(input[2]))
    }
};
console.log(evaluate('4+2'));
console.log(evaluate('5*7'));
console.log(evaluate('6-1'));
console.log(evaluate('9/2'));
console.log(evaluate('2^8'));

