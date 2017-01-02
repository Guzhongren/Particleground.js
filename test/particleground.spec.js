const chai = require('chai');
const jsdom = require('mocha-jsdom');

const expect = chai.expect;

//const pjs = require('../dev/particleground.all');

function limitRandom(max, min) {
    return max === min ? max : (Math.random() * (max - min) + min);
}
/*
describe('limitRandom()', () => {
    console.log(jsdom());
    it('limitRandom(20, 2) 应该输出 2 ~ 20 之间的数字', () => {
        return 51 <= limitRandom(20, 2) < 200
    });
});*/

describe('util.pInt()', () => {

    let Particleground = null;
    jsdom();

    before(() => {
        Particleground = require('../dev/particleground');
    });

    it(`util.pInt('520px') 应该输出 520`, () => {
        expect(Particleground.util.pInt('520px')).to.equal(520);
    });
});
