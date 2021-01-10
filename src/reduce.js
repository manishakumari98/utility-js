const reduce = (arr, appliedFunction, accumulator) => {
	if(arr.length == 0){
		return accumulator;
	}else{
		let result = accumulator;

		if(accumulator == undefined){
			result = '';
		}
		for(let i=0; i<arr.length; i++){
			result = appliedFunction(result,arr[i]);
		}
		return result;
	}
}

module.exports = reduce;