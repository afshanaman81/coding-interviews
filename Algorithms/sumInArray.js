{
function sumInArray_Linear(arr, sum){
	for (let i=0; i< arr.length; i++){
		for (let j= i+1; j< arr.length; j++){
			// break the inner loop if a value greater than the difference is found (because its a sorted array)
			if (arr[j] > (sum - arr[i])){
				break
			}
			if (arr[i] + arr[j] == sum){
				return `${sum} is found as the sum of element ${arr[i]} and ${arr[j]} at indices ${i} and ${j}`
			}
		}
	}
}

const arr = [1,2,4,6,7,12, 15, 19,23]
const sum = 11

console.log(sumInArray_Linear(arr, sum))
}


/*********************************************************/


{
function sumInArray_Binary(arr, sum){
	let i, j
	for (i=0; i< arr.length; i++){
		let diff = sum - arr[i]
		j = binarySearch(arr, diff)

		// break the loop when the sum is found
		if (j != -1)	break
	}
	return `${sum} is found as the sum of element ${arr[i]} and ${arr[j]} at indices ${i} and ${j}`
}

function binarySearch(arr, value){
	let start = 0
	let end   = arr.length -1
	let mid
	while (start <= end){
		mid = Math.ceil((start+ end)/2)
		if (arr[mid] === value){
			return mid
		}else if (value < arr[mid]){
			end = mid -1
		}else if (value > arr[mid]){
			start = mid + 1
		}else {
			return -1
		}
	}
	return -1
}

const arr = [1,2,4,6,7,12, 15, 19,23]
const sum = 11
console.log(sumInArray_Binary(arr, sum))
}



/*********************************************************/


{
function sumInArray_MovingWindow(arr, sum){

	let start   = 0
	let end 	= arr.length -1 

	let tempSum = arr[start] + arr[end]

	while (start < end){	// havent converged
		if (tempSum === sum) {
			break
		}else if(tempSum > sum){
			end--
		}else if (tempSum < sum){
			start++
		}
		tempSum = arr[start] + arr[end]
	}
	if (start === end){
		return `Sum of ${sum} was not found`
	}else{
		return `${sum} is found as the sum of element ${arr[start]} and ${arr[end]} at indices ${start} and ${end}`
	}
}
	

const arr = [2,4,6,7,12, 15, 19,23]
const sum = 5

console.log(sumInArray_MovingWindow(arr, sum))

}

