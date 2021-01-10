const reduce = require('./reduce');

describe('Reduce', () => {

    it('x+y function applied on [] is undefined', () => {
        expect(reduce([],(x, y) => x + y)).toBeUndefined();
    });

    it('x+y,10 function applied on [] is 10', () => {
        expect(reduce([],(x, y) => x + y, 10)).toEqual(10);
    });

    it('x+y function applied on non-empty array', () => {
        expect(reduce(['a','b','c'],(x, y) => x + y)).toEqual('abc');
    });

    it('x+y, z function applied on non-empty array', () => {
        expect(reduce(['a','b','c'],(x, y) => x + y, 'z')).toEqual('zabc');
    });
})
