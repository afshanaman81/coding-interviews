{
	function binarySearch(Arr, N){
		let start = 0
		let end = Arr.length -1
		let mid 
		let counter = 1
		while (start <= end){

			mid = Math.ceil((start + end)/2)
			console.log(`Pass ${counter++} => Mid = ${mid}`)
			
			if (N === Arr[mid]){
				return mid
			}else if (N > Arr[mid]){
				start = mid + 1			
			}else if (N < Arr[mid]){
				end = mid -1
			}
		}
		return -1
	}

	const Arr = [1,3,7,14,17,23, 100,200,300,400]
	const N = 20
	const indexFound = binarySearch(Arr, N)

	let foundStr = `${N} is found at index ${indexFound}`
	let resultStr = (indexFound == -1)? `${N} Not Found` : foundStr
	console.log(resultStr)
}
