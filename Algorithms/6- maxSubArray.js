{
	
// maximum subarray 
// A subarray which adds to the highest value

// if the array elements are all positive, then its simply the whole array 
// if all the elements are negative, then its the largest element
// if the elements are mixed, 
// 		then if the elements are sorted, 
// 			then its the array starting with the first element >0 till the end of the array
// 		if the elements are not sorted,
// 		then its below
function maxSubArr(arr){
	let currSubArray = {
		start: -1,
		end: -1,
		sum: 0
	}
	let maxSubArray = {
		start: -1,
		end: -1,
		sum: 0
	}

	for (let i = 0; i < arr.length; i++){
		if (arr[i] < 0){
			// update MaxSubArr if needed
			console.log('updating MaxSubArr')
			if (currSubArray.sum > maxSubArray.sum){
				maxSubArray.start = currSubArray.start
				maxSubArray.end   = currSubArray.end
				maxSubArray.sum   = currSubArray.sum
			}
			// reset currSubArray
			currSubArray.start = -1
			currSubArray.end = -1
			currSubArray.sum = 0			

		}else{
			// keep expanding the end of the currSubArray, and adding to the sum
			console.log('expanding currSubArr')
			// set the start once
			if (currSubArray.start === -1)	currSubArray.start = i

			currSubArray.end = i
			currSubArray.sum += arr[i]
		}		
	}

	// in case the last element of the whole array is positive 
	if (currSubArray.sum > maxSubArray.sum){
		maxSubArray.start = currSubArray.start
		maxSubArray.end   = currSubArray.end
		maxSubArray.sum   = currSubArray.sum
	}
	return maxSubArray

}

// input
let A = [1,-3, 2, 1, -1, 1,2, -1,-2,-3, 5,4,3,2]	// length = 14
console.log(maxSubArr(A))

}