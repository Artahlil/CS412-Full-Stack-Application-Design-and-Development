const executeFunction = (word, functionInput) => functionInput(word);
const removeCs = input => input.replace(/c/g, '*c').split('*');
const replaceA = input => input.replace(/a/g, 'A');

let firstMethod = executeFunction("supercalifragilisticexpialidocious", removeCs);
let secondMethod  = executeFunction("supercalifragilisticexpialidocious", replaceA);

const secondMethodResponseBody = {
    originalString: "supercalifragilisticexpialidocious",
    modifiedString: secondMethod,
    numberReplaced: "supercalifragilisticexpialidocious".split('a').length - 1,
    length: secondMethod.length
};

console.log(firstMethod);
console.log(secondMethodResponseBody);

