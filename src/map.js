const head = require('./head');
const tail = require('./tail');

const map = (arr, appliedFunction) => {
	let result = [];

	return mapFunction(arr, appliedFunction, result);
}

function mapFunction(arr, appliedFunction, result){
	if(arr.length == 0){
		return result;
	}else{
		let mappedValue = appliedFunction(head(arr));
		result.push(mappedValue);

		return mapFunction(tail(arr), appliedFunction, result);
	}
}

module.exports = map;