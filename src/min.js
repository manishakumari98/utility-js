const tail = require('./tail');

const min = (arr) => {
	let minNum = arr[0];

	return minFunction(arr, minNum);
}

function minFunction(arr, minNum){
	if(arr.length == 0){
		return minNum;
	}else{
		if(arr[0] < minNum){
			minNum = arr[0];
		}
		return minFunction(tail(arr), minNum);
	}
}

module.exports = min;
