const map = require('./map');

describe('Map', () => {

	it('Cube function applied on [1,2,3] is [1,8,27]', () => {
		const cube = (num) => {
			return num * num * num;
		}
        	expect(map([1,2,3],cube)).toEqual([1,8,27]);
	});

	it('Cube function applied on [] is []', () => {
		const cube = (num) => {
			return num * num * num;
		}
        	expect(map([],cube)).toEqual([]);
	});

	it('Identity function applied on [1,2,3] is [1,2,3]', () => {
		const identity = (num) => {
			return num;
		}
        	expect(map([1,2,3],identity)).toEqual([1,2,3]);
	});

	it('Increment function applied on an object [{x:10}] is [11]', () => {
        	expect(map([{x : 10}],someObject => someObject.x + 1)).toEqual([11]);
	});

})
