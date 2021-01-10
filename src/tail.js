const tail = (arr) => {
	let temp = [];
	for(let i=1; i<arr.length; i++){
		temp.push(arr[i]);
	}
	return temp;
}

module.exports = tail;