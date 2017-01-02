const chai = require('chai');
const jsdom = require('mocha-jsdom');

const assert = chai.assert;

//const pjs = require('../dev/particleground.all');

function limitRandom(max, min) {
    return max === min ? max : (Math.random() * (max - min) + min);
}

describe('limitRandom()', () => {
    it('limitRandom(20, 2) 应该输出 2 ~ 20 之间的数字', () => {
        const num = limitRandom(20, 2);
        assert.equal(true, 2 <= num && num < 20 ? true : false);
    });
});

describe('util.pInt()', () => {

    let Particleground = null;
    jsdom();

    before(() => {
        Particleground = require('../dev/particleground');
    });

    it(`util.pInt('520px') 应该输出 520`, () => {
        assert.equal(Particleground.util.pInt('520px'), 520);
    });
});
