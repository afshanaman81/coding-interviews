{
	// Merge Sort
	// Its a recursive algo

	function sorted(arr, start, end){

		// base cases
		if (arr.length == 1	) return arr


		// recursive steps:
		if (start < end){
			// divide the array/ find the mid index
			let mid = Math.ceil((start + end)/2)
			console.log('[start, mid, end]')
			console.log([start, mid, end])
			// call sorted on the two halves
			sorted(arr, start, mid-1 )	// left half
			sorted(arr, mid, end)		// right half

			// merge the returned arrays
			
			merge(arr, start, mid, end)

			// return the merged array
			return arr
		}
			
	}

	function merge(arr, start, mid, end){
		let arrLeft = new Array()
		let arrRight = new Array()
		for (let i=start; i< mid; i++){			
			arrLeft.push(arr[i])
		}
		for (let i= mid; i<= end; i++){
			arrRight.push(arr[i])
		}
		console.log('Array Left:\n')
		console.log(arrLeft)
		console.log('Array Right:\n')
		console.log(arrRight)


		let indexLeft = 0	// independent index of small left array
		let indexRight= 0	// independent index of small right array
		let index = start	// common index of the main large array (so its directly changing values!)


		while (indexLeft < arrLeft.length && indexRight < arrRight.length){
			if (arrLeft[indexLeft] < arrRight[indexRight]){
				arr[index] = arrLeft[indexLeft]
				index++
				indexLeft++
			}else if (arrLeft[indexLeft] > arrRight[indexRight]){
				arr[index] = arrRight[indexRight]
				index++
				indexRight++
			}else{
				arr[index++] = arrRight[indexRight]
				arr[index++] = arrLeft[indexLeft]
				
				indexRight++
				indexLeft++
			}
		}
		console.log([indexLeft, indexRight, index])
		
		// put in the remaining elements from the larger array
		if (indexLeft < arrLeft.length){
			for (let i = indexLeft; i< arrLeft.length ; i++){
				arr[index++] = arrLeft[i]
			}
		}

		if (indexRight < arrRight.length){
			for (let i = indexRight; i< arrRight.length ; i++){
				arr[index++] = arrRight[i]
			}
		}

		console.log('Merged Array:')
		console.log(arr)
		console.log('\n\n')
	}


	// Input:
	let A = [5,2,1, 3, 4, 2, 6,1, 8]
	let L = A.length -1
	console.log(sorted(A, 0, L))


	//A = [5,2,1, 3, 4, 2, 3,1, 8]
	//console.log(sorted(A))

}