const tail = require('./tail');

const max = (arr) => {
	let maxNum = arr[0];

	return maxFunction(arr, maxNum);
}

function maxFunction(arr, maxNum){
	if(arr.length == 0){
		return maxNum;
	}else{
		if(arr[0] > maxNum){
			maxNum = arr[0];
		}
		return maxFunction(tail(arr), maxNum);
	}
}

module.exports = max;
