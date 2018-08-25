{
	// Area of Overlapping Rectangles
	function overlapArea(R1, R2){

		const distanceX= distance(R1[0].x, R1[1].x, R2[0].x, R2[1].x)
		if (distanceX <=0)	return -1

		const distanceY = distance(R1[0].y, R1[1].y, R2[0].y, R2[1].y)
		if (distanceY <=0)	return -1

		return (distanceX * distanceY)



		// linear distance between two nearest points of 4 points
		function distance(bottomLeft_R1, topRight_R1, bottomLeft_R2, topRight_R2){
			return (Math.min(topRight_R1, topRight_R2) - Math.max(bottomLeft_R1, bottomLeft_R2))
		}



	}

	// Output of -1 means not overlapping

	// Input 1:
	let R1 = [{x: 1, y:1}, {x: 4, y:5}]
	let R2 = [{x: 3, y:2}, {x: 7, y:3}]
	console.log(overlapArea(R1, R2))

	// Input 2: 
	R1 = [{x: 1, y:1}, {x: 4, y:5}]
	R2 = [{x: 3, y:2}, {x: 7, y:7}]
	console.log(overlapArea(R1, R2))


	// Input 3:
	R1 = [{x: -5, y:1}, {x: 1, y:5}]
	R2 = [{x: 3, y:2}, {x: 7, y:7}]
	console.log(overlapArea(R1, R2))

}