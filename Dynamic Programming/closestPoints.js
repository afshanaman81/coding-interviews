{
	// k closests points to the origin (0,0)
	function closestPoints(arr, k){
		// Approach: 
		// 1. put the distance of first k points in an array
		// 2. loop through the remaining elements of arr
		// 3. if the distance of the new point <= min of the k already there
		// 4. replace the max of the k values by the value from step 3

		let topKDistances = new Array()	

		// 1. Calculate distances of first K points
		for (let i=0; i< k; i++){
			let x = arr[i][0]
			let y = arr[i][1]
			let distance = Math.sqrt(x*x + y*y)

			topKDistances.push(Number(distance.toFixed(2)))
		}

		// Optimization
			// sort the topKDistances array in Ascending order
			// and put it in a Queue, (Tail = smallest, larger, largest = Head)
			// and then only compare the distance to the first element				
				// if the distance is <= to the smallest, 
					// then remove the largest (deque head)
					// and enque the new distance

		// For now, I will just simulate the Queue by an array using 
		// Shift/Unshift and Pop/push ops
		// Pop/Push are for the end side of the array
		// Shift/Unshift are for the start side of the array
				
		topKDistances.sort((a,b)=> 	a-b)	
		// 2. Loop through the remaining
		for (let j = k; j < arr.length; j++){
			let x = arr[j][0]
			let y = arr[j][1]
			let distance = Math.sqrt(x*x + y*y)

			if (distance <= topKDistances[0]){
				// pop the last element
				topKDistances.pop()
				topKDistances.unshift(Number(distance.toFixed(2)))
			}
		}

		return topKDistances
	}

	

	// Input 1:
	let Arr = [[1,3], [-5, 17], [2,4], [55, 3], [11,-5], [-4,-6]]
	let   k = 3
	console.log(closestPoints(Arr, k))


	// Input 2:
	Arr = [[100,3], [-5, 17], [55, 3], [11,-5], [2,4], [-4,-6]]
	k = 4
	console.log(closestPoints(Arr, k))


}