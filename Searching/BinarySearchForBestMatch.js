{
	
	// Binary search for a value equal to or smaller than the given value
	// LTE match (Less than or equal)

	function bestMatch(arr, find){
		let start = 0
		let end   = arr.length -1
		let mid

		while (start <= end){
			mid = Math.ceil((start + end) / 2)	
			console.log([start, mid, end])
			if (find == arr[mid]){
				return mid
			}else if (find < arr[mid]){				
				end = mid -1 
			}else if (find > arr[mid]){
				start = mid + 1
			}
		}

		// left edge case for when no value smaller than the given value is found
		if (mid == 0 && find != arr[mid]){
			return -1
		}
		return mid
	}

	function helper(find){
		let indexFound = bestMatch(A, find)	


		let foundStr = `best LTE match for ${find} was ${A[indexFound]} found at index ${indexFound}`
		let notFoundStr = `No LTE match Found for ${find}`
		let resultStr = (indexFound == -1)? notFoundStr : foundStr
		console.log(resultStr)
	}


	// Input
	console.log(`NOTE: LTE stands for 'Less Than or Equal'`)
	let A = [2,2,3,4,5,6,8,9,13,15,23,35]	// sorted array
	let find 

	// find an element which is in range of the array And is in array
	find = 15
	helper(find)

	// an element which is in range of the array but not equal to any array element
	find = 7
	helper(find)

	// find an element larger than the largest in array
	find = 60
	helper(find)

	// find an element smaller than the smallest in array
	find = 1
	helper(find)
	
}