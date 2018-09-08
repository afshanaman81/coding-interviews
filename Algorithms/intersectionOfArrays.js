{
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

// Input:
let A1 = [2,6,9,11,13,17]
let A2 = [3,6,7,10,13,18]
let A3 = [4,5,6,9,11,13]

console.log(intersectionOfArrays(A1, A2, A3))

}