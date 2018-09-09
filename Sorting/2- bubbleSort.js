{
	// Bubble Sort
	// worst case time O(N^2)
	// Similar to insertion sort
	// But the upper part of the array is kept for the sorted portion 
	// and the absolute highest value goes to its correct position every iteration

	function sorted(arr){
		for (let i=0; i< arr.length -1; i++){
			for (let j=0; j< arr.length - i -1 ; j++){

				if (arr[j] > arr[j+1]){
					let temp = arr[j]
					arr[j]   = arr[j+1]
					arr[j+1] = temp
				}

			}
		}
		return arr

	}

	// Input:
	let A = [5,2,1, 3, 4, 2, 6,1, 8]
	console.log(sorted(A))


	A = [8,7,6,5,4,3,2,1]
	console.log(sorted(A))

}