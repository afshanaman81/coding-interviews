{
	// Insertion sort is a O(N^2) time complexity in worst case
	// We do the swapping in place
	// the lower part of the given array is used as a hold for the 'sorted' subarray
	// the sorted subarray is increased in size 1 at a time, every pass
	// the sorted subarray is only 'relatively' sorted. 

	// initially, the size of the sorted subarray is 1, consisting of the first element
	// because the first element is relatively sorted

	// insertion sort is an ONLINE algo, that is, it can sort while new data arrives
	// in real time
	function sorted(arr){
		for (let i=1; i < arr.length; i++){
			let j = i 
			console.log(`i = ${i}`)
			while (j > 0 && arr[j] < arr[j-1]){
				console.log(`\tj = ${j}`)
				// swap
				let temp = arr[j]
				arr[j] = arr[j-1]
				arr[j-1] = temp
				console.log(`\tswapped ${temp} from index ${j} with ${arr[j]} at index ${j-1}`)

				// update the counter
				j--
			}
			console.log(`\n\n`)
		}
		return arr
	}


	// Input:
	let A = [5,2,1, 3, 4, 2, 6,1, 8]
	console.log(sorted(A))


	A = [5,2,1, 3, 4, 2, 3,1, 8]
	console.log(sorted(A))
}