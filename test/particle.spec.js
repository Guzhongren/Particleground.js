const assert = require('assert');

function pInt (str) {
    return parseInt(str, 10);
}

describe('pInt()', () => {
    it(`pInt('520X') 应该输出 520`, () => {
        assert.equal(520, pInt('520X'));
    });
    it(`pInt(1314) 应该输出 1314`, () => {
        assert.equal(1314, pInt(1314));
    });
});