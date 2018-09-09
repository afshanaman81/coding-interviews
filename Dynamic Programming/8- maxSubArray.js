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
	function maxSubArray(arr){
		//let subArray = new Array()
		let currStart = 0, currEnd =0, prevStart =0, prevEnd = 0
		let currSum   = 0
		let prevSum   = 0

		for (let i=0; i< arr.length; i++){
			console.log(`i : ${i}`)
			if (arr[i] <= 0 || i == arr.length -1) {
				// reset	
				currEnd = (i == arr.length -1)? i: i-1			
				if (currSum > prevSum){					
					console.log(`updating the maxsubarray window from 
						${[prevStart, prevEnd, prevSum]} to ${[currStart, currEnd, currSum]}`)
					prevSum   = (i == arr.length -1)? currSum + arr[i]: currSum
					prevStart = currStart
					prevEnd   = currEnd

					currSum = 0
				}else{
					currSum = 0
					console.log(`moving forward with the same old stuff: ${[prevStart, prevEnd, prevSum]}`)
				}

			}else if (arr[i]>0){
				// set the start once
				if (arr[i-1]<= 0)	{ currStart = i }
				currEnd =  i 
				currSum += arr[i]
			}
		}
		return {'start': prevStart, 'end': prevEnd, 'sum': prevSum}

	}



	// Input:
	let A = [1,-3, 2, 1, -1, 1,2, -1,-2,-3, 5,4,3,2]	// length = 14
	let subArray = maxSubArray(A)
	console.log(`max sub array is [${A.slice(subArray.start, subArray.end + 1)}] and its Sum is ${subArray.sum}`)
	// In Array.splice(start, end)  'end' is not included, thats why we have to go till end + 1
}