{
	
	// First Recurring character in a String/Array

	// Time Complexity: O(n * n) (nested loops, each loop is O(n))
	function firstRecurringChar(arr){
		if (arr.length ==0)	 return -1
		if (arr.length ==1)	 return arr[0]

		for (let i=0; i<arr.length; i++){
			let currChar = arr[i]
			for (let j= i+1; j<arr.length; j++){
				if (arr[j] === currChar){
					return currChar
				}
			}
		}
		return -1
	}


	// Solution with memoization
	// Time complexity is O(n)
	function firstRecurringChar_DP(arr){
		if (arr.length ==0)	 return -1
		if (arr.length ==1)	 return arr[0]

		let occurences = new Map()
		for (let i=0; i<arr.length; i++){
			let key = arr[i]
			if (occurences.get(key)){
				return key
			}else{
				occurences.set(key, 1)
			}
		}
		return -1
	}


	// Input: 
	let Arr = ['a', 'b', 'c', 'd', 'e']
	console.log(firstRecurringChar(Arr))
	console.log(firstRecurringChar_DP(Arr))

}