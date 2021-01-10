const tail = require('./tail');

const max = (arr) => {
	maxNum = arr[0];
	result = maxFunction(arr, maxNum);
	return maxNum;
}

function maxFunction(arr){
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
