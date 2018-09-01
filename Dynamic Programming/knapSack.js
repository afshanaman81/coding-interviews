{
	// Knapsack Problem
	// Question 1: what is the combination of items I can put in a bag which fills 
	// the bag and give the maximum value

	// Question 2: What is the maximum value we can get from filling the bag
	function bagTheBestDeal(n, c){
		// n: remaining items to consider
		// c: remaining capacity of the bag

		//console.log(`\nConsidering item at index ${n} with weight: ${w[n]} and value: ${v[n]}`)
		//console.log(['remaining items', 'remaining capacity'])
		//console.log([n, c])
		
	// Base cases
		// when the result is already calculated in the past
		if (DPArr[n][c] != null) {
			console.log(`Using memo`)
			return DPArr[n][c]
		}	
		
		// when no items left, or no capacity left
		if (n==0 || c == 0){	return 0}

	// Recursive cases
		let result = 0
		if (w[n] > c){ 	// dont put current item but investigate the remaining items
			//console.log('\tOnly One Way to Go')
			result = bagTheBestDeal(n-1, c)			
		}else {
			//console.log('\tConsidering both Options')
			let putTheItem = v[n] + bagTheBestDeal(n-1, c-w[n])
			let dontPutTheItem = bagTheBestDeal(n-1, c)
			
			// Include the item in the baggedItems array and return the max of the two values
			if (putTheItem >= dontPutTheItem){
				let key = `item ${n}`
				if (!baggedItems.get(key)){
					baggedItems.set(key, `Weight: ${w[n]}, Value: ${v[n]}`)
				} 
				result = putTheItem
			}else{
				result = dontPutTheItem
			}
			//result = Math.max(putTheItem, dontPutTheItem)			
		}

		DPArr[n][c] = result
		return result

	}

	function KSHelper(n, c){
		// reset the cache
		baggedItems = new Map()
		DPArr 		= new Array()
		for (let i=0; i <= n; i++){
			DPArr.push([null])
			for (let j = 0; j <= c; j++){
				DPArr[i][j] = null
			}
		}
		//console.log(baggedItems)
		//console.log(DPArr)

		// call the recursive function
		let value = bagTheBestDeal(n,c)

		// display the results
		console.log(`The value of the best deal is ${value}`)
		console.log(`The bag contains ${baggedItems.size} items: `)
		console.log(baggedItems)
		console.log("\n\n")
	}



	// Input Params
	let N = 6  // total number of elements
	let C = 5  // total bag capacity

	let w = [0, 2,  5, 3, 13, 1,  7]	// index 0 is dummy
	let v = [0, 12, 1, 7,  1, 10, 5]	// index 0 is dummy

	// variables in each input
	let baggedItems, DPArr

	// Input 1:
	KSHelper(N,C)

	// Input 2:
	C = 20
	KSHelper(N,C)

}