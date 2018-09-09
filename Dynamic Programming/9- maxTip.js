{
	
	// Maximum Total Tip
	// Two waiters: A and B
	// Total Orders A can fill: X
	// Total Orders B can fill: Y
	// Total Orders: N  (N <= X + Y)
	// A's Tip for each Order: ATips (array of N elements)
	// B's Tip for each Order: BTips (array of N elements)
	function tipMaximizer(n, x, y){
		//console.log([n, x, y])
		let result = 0

		// base cases
		// if no order left
		if (n == 0){ return 0}

		// if A and B cannot take any more orders (ideally, should not happen)
		if (x == 0 && y == 0){ result = 0}

		// Recursive cases
		else {
			// If A cannot take any more orders => B must take the order
			if (x <= 0){
				let BTakesOrder = BTips[n] + tipMaximizer(n-1, x, y-1)
				result = BTakesOrder
			}

			// If B cannot take any more orders => A must take the order
			else if (y <= 0){
				let ATakesOrder = ATips[n] + tipMaximizer(n-1, x-1, y)
				result = ATakesOrder
			}

			// If both A and B can take the next order, then find the max of the two
			else{
				let BTakesOrder = BTips[n] + tipMaximizer(n-1, x, y-1)
				// Remember BDontTakeOrder = ATakesOrder and vice versa
				let ATakesOrder = ATips[n] + tipMaximizer(n-1, x-1, y)
				result = Math.max(BTakesOrder, ATakesOrder)
			}
		}

		return result


	}

	function maxTipHelper(n, x, y){
		// n: remaining orders to consider
		// x: A's remaining order capacity
		// y: B's remaining order capacity

		let finalTip = tipMaximizer(n, x, y)
		console.log(`Maximum Tip at the end of the day : USD ${finalTip}`)
	}

	// Input
	let N = 4 // 4 orders
	let X = 4 // A can take max 4 orders
	let Y = 4 // B can take max 4 order

	// index 0 is dummy, that is, no order ==> no tip
	let ATips = [0,  1,  3, 2, 5]
	let BTips = [0, 10, 11, 1, 2]

	maxTipHelper(N, X, Y)


// Remember! X + Y >= N
	X = 3 // A can take max 3 orders
	Y = 1 // B can take max 1 order
	maxTipHelper(N, X, Y)


	X = 1 // A can take max 1 orders
	Y = 3 // B can take max 3 order
	maxTipHelper(N, X, Y)

	X = 2 // A can take max 2 orders
	Y = 2 // B can take max 2 order
	maxTipHelper(N, X, Y)



	N=4
	X=4
	Y=1
	ATips=[0,10,20,30,40]
	BTips=[0, 1,25,3,100]
	maxTipHelper(N, X, Y)
}