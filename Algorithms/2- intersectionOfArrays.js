{
	// find intersection of k sorted arrays
function intersectionOfArrays(A1, A2, A3){
let xArr = new Array()
let x=0, y=0, z=0
let OBBCondition = (x >= A1.length || y >= A2.length || z >= A3.length) // out of bound condition

while(!OBBCondition){
	console.log([x,y,z])
	if (A1[x] === A2[y] && A1[x] === A3[z]){
		console.log(`pushing ${A1[x]}`)
		xArr.push(A1[x])
		x++
		y++
		z++
	}
	else if (A1[x] < A2[y]) x++
	else if (A2[y] < A3[z]) y++
	else z++
	OBBCondition = (x >= A1.length || y >= A2.length || z >= A3.length)
}
return xArr

}


// Time complexity is O(N.logBC) where N is the number of elements in smallest array
// B and C is the number of elements in the other two arrays
function intersectionOfUnsortedArrays(A1, A2, A3){
	let xArr = new Array()
	// take the smallest array for outer loop
	let smallestArr = A3
	for (let i = 0; i < smallestArr.length; i++){
		let element = smallestArr[i]
		let match1  = binarySearch(A1, element)
		if (match1 != -1){
			let match2 = binarySearch(A2, element)
            console.log([match1, match2])
			if (match2 != -1){
				xArr.push(element)
			}
		}
	}

	return xArr

}

function binarySearch(A, N){
	let start = 0
	let end   = A.length - 1
	let mid

	while (start <= end){
		mid = Math.ceil((start + end) / 2)
		if (N === A[mid]){
			console.log(`${N} is found at index ${mid} in array ${A}`)
			return mid
		}else if (N < A[mid]){
			end = mid -1
		}else if (N > A[mid]){
			start = mid + 1
		}
	}
 
	return -1

}

// Input:
let A1 = [2,6,9,11,13,17]
let A2 = [3,6,7,10,13,18]
let A3 = [4,5,6,9,11,13]
let k  = 3 // 3 arrays
//console.log(intersectionOfArrays(A1, A2, A3))
// expected output = [6,13]

A1 = [12,6,9,11,2,17]
A2 = [11,10,7,6,3,18]
A3 = [6,13,11,4]
console.log(intersectionOfUnsortedArrays(A1, A2, A3))
// expected output = [6, 11]

}