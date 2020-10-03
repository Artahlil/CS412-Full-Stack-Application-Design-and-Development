const {reverse} = require('./PS1.P1');
const {evalnum} = require('./PS1.P2');
const {funcExc,firstexp, secondexpobject} = require('./PS1.P3');

const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Reverse Alphabetical test', () => {
    it('should return xuutsssrrppoollliiiiiiigfeedcccaaa when passed supercalifragilisticexpialidocious', () => {
        let foo = reverse('supercalifragilisticexpialidocious');
        expect(foo).to.have.string('xuutsssrrppoollliiiiiiigfeedcccaaa');
    });
    it('should return vrrkdaaa when passed aardvark', () => {
        let foo1 = reverse('aardvark');
        expect(foo1).to.have.string('vrrkdaaa');

    });
})
describe('Evaluate Expression', () => {
    it('should return 6 when passed 4 and 2', () => {
        let sum = evalnum('4+2');
        expect(sum).to.be.equal(6);
    });
    it('should return 64 when 8 raised to power of 2', () => {
        let power = evalnum('8^2');
        expect(power).to.be.equal(64);

    });
    it('should return 35 when 7 multiplies 5', () => {
        let times = evalnum('7*5');
        expect(times).to.be.equal(35);

    });
    it('should return 5 when 6 subtracts 1', () => {
        let diff = evalnum('6-1');
        expect(diff).to.be.equal(5);

    });
    it('should return 4.5 when 9 divides 2', () => {
        let div = evalnum('9/2');
        expect(div).to.be.equal(4.5);

    });
})
describe('Decorator Function + String', () => {
    it('should return break word at C when passed supercalifragilisticexpialidocious', () => {
        let breakc = firstexp;
        expect(breakc).to.have.lengthOf(4);
    });
    it('should return object', () => {
        let object1 = secondexpobject;
        expect(object1).to.have.lengthOf(34);
    });
})

