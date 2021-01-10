const map = (arr, appliedFunction) => {
	let result = [];
	for(let i=0; i<arr.length; i++){
		let mappedValue = appliedFunction(arr[i]);
		result.push(mappedValue);
	}
	return result;
}

module.exports = map;