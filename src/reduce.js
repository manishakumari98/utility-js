const head = require('./head');
const tail = require('./tail');

const reduce = (arr, appliedFunction, accumulator) => {
	if(arr.length == 0){
		return accumulator;
	}else{
		let result = accumulator;

		if(accumulator == undefined){
			result = '';
		}
		
		return reduceFunction(arr, appliedFunction, result);
	}
}

function reduceFunction(arr, appliedFunction, result){
	if(arr.length == 0){
		return result;
	}else{
		result = appliedFunction(result, head(arr));

		return reduceFunction(tail(arr), appliedFunction, result);
	}
}

module.exports = reduce;