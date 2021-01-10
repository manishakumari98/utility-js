const filter = (arr, appliedFunction) => {
	let result = [];
	for(let i=0; i<arr.length; i++){
		let mappedValue = appliedFunction(arr[i]);
		if(mappedValue){
			result.push(arr[i]);
		}
	}
	return result;
}

module.exports = filter;