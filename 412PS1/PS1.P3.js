const funcExc = (word, decorators) => decorators(word);

const brokenC = input => input.replace(/c/g, '*c').split('*');

let firstexp = funcExc("supercalifragilisticexpialidocious", brokenC);

const replaceA = input => input.replace(/a/g, 'A');

const secondexpobject = {
    originalString: "supercalifragilisticexpialidocious",
    modifiedString: funcExc("supercalifragilisticexpialidocious", replaceA),
    numberReplaced: "supercalifragilisticexpialidocious".split('a').length - 1,
    length: funcExc("supercalifragilisticexpialidocious", replaceA).length
};

console.log(firstexp);
console.log(secondexpobject);

module.exports = {firstexp, secondexpobject, funcExc}
