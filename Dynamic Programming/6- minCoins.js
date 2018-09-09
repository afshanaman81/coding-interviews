{
//http://interactivepython.org/courselib/static/pythonds/Recursion/DynamicProgramming.html
//https://codereview.stackexchange.com/questions/192236/find-the-minimum-number-of-coin-change


	// minimum number of coins to make M money
	function minNumberOfCoins(arr, M, i){
		console.log({'remaining money': M, 'index': i})
		let result = 0
		//base case
		if (M == 0){ 
			console.log(`\tNo coins needed`)
			return 0		// no coins needed
		} 
		if (M < 0 || i < 0){
			console.log(`\t***this is wrong`)
			return 0 		// error
		}	
		else{	
			if (arr[i] == M){
				console.log(`\tJust this coin is sufficient`)
				return 1
			}else if (arr[i] > M){
				// we dont add this coin
				console.log(`\tThis coin ${arr[i]} wont be added`)
				result = minNumberOfCoins(arr, M, i-1)
			}else if(arr[i] < M){
				// recursive cases
				console.log(`\tFinding the minimum of 'to Add or not to Add this coin ${arr[i]}'`)
				let useCoin = 1 + minNumberOfCoins(arr, M-arr[i], i-1)
				let dontUseCoin = minNumberOfCoins(arr, M, i-1)
				// min of results
				result = Math.min(useCoin, dontUseCoin)
				/*if (useCoin < dontUseCoin){
					console.log(`\tThis coin ${arr[i]} will be added`)
					result = useCoin
				}else{
					console.log(`\tThis coin ${arr[i]} will not be added`)
					result = dontUseCoin
				}*/
			}				
		}
		
		return result


	}

	// Input:
	let coinsArr = [9,6,5,1]	// Lets assume that each coin represents a dollar value 
	let M	= 11				// this is the 13 dollars we want in change
	console.log(minNumberOfCoins(coinsArr, M, coinsArr.length -1))

	
	M	 = 2	
	//console.log(minNumberOfCoins(coinsArr, M))

	
	M	 = 5	
	//console.log(minNumberOfCoins(coinsArr, M))


	M	 = 11	
	//console.log(minNumberOfCoins(coinsArr, M))

}
