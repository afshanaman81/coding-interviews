{
	// Move all 0's to the end of the array
	function shiftZeros(arr){
		let start = 0
		let end   = arr.length -1 

		while (start < end){
			if (arr[end] === 0){
				end--
			}else if (arr[start] === 0){
				// swap
				let hold = arr[end]
				arr[end] = 0
				arr[start] = hold

				console.log(`swapped 0 at index ${start} with ${hold} at index ${end}`)

				// move ends
				end--
				start++
			}else {
				start++
			}
		}
		return arr
	}


	// Input:
	let Arr = [0,1,2,0,3,0]
	console.log('Input 1:')
	console.log('\tOriginal Array:')
	console.log(Arr)

	console.log('\tShifted Array:')
	console.log(shiftZeros(Arr))

	// Input:
	Arr = [0,1,2,0,3,4,0,0,5,6,7]
	console.log('\nInput 2:')
	console.log('\tOriginal Array:')
	console.log(Arr)

	console.log('\tShifted Array:')
	console.log(shiftZeros(Arr))
}