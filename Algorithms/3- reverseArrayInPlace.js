{
// Reverse Array in Place
	function reverseArray(arr){
		// edge cases
		if (!arr )	return -1
		if (arr.length == 1)	return arr

		let start = 0, end = arr.length -1
		while (start < end){
			// swap
			let hold 	= arr[start]
			arr[start] 	= arr[end]
			arr[end]	= hold

			// move indices inward
			start++
			end--
		}
		return arr
	}

	// Input:
	const Arr = [0, 1,2,3,4,5,6,7,8,9]
	let Arr1 		// edge case 1
	let Arr2 = []	// edge case 2
	let Arr3 = [3]	// edge case 3

	console.log(reverseArray(Arr))
	console.log(reverseArray(Arr1))
	console.log(reverseArray(Arr2))
	console.log(reverseArray(Arr3))
}