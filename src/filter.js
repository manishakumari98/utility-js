const head = require('./head');
const tail = require('./tail');

const filter = (arr, appliedFunction) => {
	let result = [];
	result = filterFunction(arr, appliedFunction, result);
	return result;
}

function filterFunction(arr, appliedFunction, result){
	if(arr.length == 0){
		return result;
	}else{
		let arrayHead = head(arr);
		let mappedValue = appliedFunction(arrayHead);
		if(mappedValue){
			result.push(arrayHead);
		}

		return filterFunction(tail(arr), appliedFunction, result);
	}
}

module.exports = filter;