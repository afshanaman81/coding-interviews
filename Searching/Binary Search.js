function binarySearchForOptimalRoute(Arr, N){
	var start = 0
	var end = Arr.length -1
	var mid, counter = 0
	while (start <= end){

		mid = Math.ceil((start + end)/2)
		console.log(`Pass ${counter++} => Mid = ${mid}`)
		if (N === Arr[mid]){
			return mid
		}else if (N > Arr[mid]){
			start = mid + 1			
		}else if (N < Arr[mid]){
			end = mid -1
		}else if (start === end){
			return mid
		}
	}
	return mid

}

const Arr = [1,3,7,14,17,23, 100,200,300,400]
const N = 20
const indexFound = binarySearchForOptimalRoute(Arr, N)
console.log(`Result is ${Arr[indexFound]}, found at index ${indexFound}`)