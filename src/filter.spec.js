const filter = require('./filter');

describe('Filter', () => {

    it('x => true function applied on [] is []', () => {
        expect(filter([],x => true)).toEqual([]);
    });

    it('x => true function applied on [1,2,3] is [1,2,3]', () => {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    });

    it('x => false function applied on [1,2,3] is []', () => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    });

    it('x > 1 function applied on [1,2,3] is [2,3]', () => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    });

    it('FilterUpperCase function applied on an [a,B,c,D] is [B,D]', () => {
	const filterUpperCase = (character) => {
		return character === character.toUpperCase();
	}
        expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(['B','D']);
    });
})
