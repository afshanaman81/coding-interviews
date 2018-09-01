{
	
	// Selection Sort is also O of n square (both average and worst case)
	// We run the algo in place
	// the lower part of the array is used to store the sorted sub array (like Insertion sort)
	// initially, the sorted subarray is empty (unlike insertion sort)
	// in every pass of the upper array of size (total - size of sorted subarray), the whole upper array 
	// is traversed (unlike Insertion sort)
	// to find the absolute smallest value

	function sorted(arr){
		for (let i = 0; i < arr.length; i++	){
			let smallest = arr[i]
			let indexOfSmallest = i
			console.log(`\nFor i= ${i}`)
			for (let j = i; j < arr.length; j++){
					console.log(`\tvisiting ${j}`)
					if (arr[j] < smallest){
						console.log(`\t\tis ${arr[j]} the smallest?`)
						smallest = arr[j]
						indexOfSmallest = j
					}
			}

			// swap the smallest element of the unsorted array with the largest of the sorted subarray
			console.log(`\t*** After all that traversing, ${smallest} is the smallest, found at index ${indexOfSmallest}`)
			arr[indexOfSmallest] = arr[i]
			arr[i] = smallest

		}

		return arr
	}


	// Input:
	let A = [5,2,1, 3, 4, 2, 6,1, 8]
	console.log(sorted(A))


	A = [8,7,6,5,4,3,2,1]
	console.log(sorted(A))
}