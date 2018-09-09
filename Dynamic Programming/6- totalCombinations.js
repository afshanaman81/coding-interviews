{
// girl from hackerRank
//https://www.youtube.com/watch?v=sn0DWI-JdNA

// some other dude
//https://www.youtube.com/watch?v=k4y5Pr0YVhg
//https://www.youtube.com/watch?v=jaNZ83Q3QGc

// cs dojo
//https://www.youtube.com/watch?v=nqlNzOcnCfs

// total number of combinations of coins which make M money
function combos(arr, M){
	let numOfCombos =  0
	if (M == 0) 	return 1
	if (M < 0)	return 0
	else{
		// ...
		
		return numOfCombos
	}

}
	
// Input:
	
let coinsArr = [1,2,5]	// Lets assume that each coin represents a dollar value 	
let M	= 13		// this is the 13 dollars we want in change
console.log(combos(coinsArr, M))

	
M	 = 2	
console.log(combos(coinsArr, M))

	
M	 = 5	
console.log(combos(coinsArr, M))


M	 = 11	
console.log(combos(coinsArr, M))
}