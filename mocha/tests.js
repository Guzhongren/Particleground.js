// http://www.codechewing.com/library/javascript-dom-browser-tests-mocha-chai/

const expect = chai.expect;

describe('util.pInt()', () => {
    it(`util.pInt('520px') 应该输出 520`, () => {
        expect(Particleground.util.pInt('520px')).to.equal(520);
    });
});