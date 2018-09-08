{
	// Top T fans with shortest names

	// Approach 1: sort the fans Array by fanQ and then get the top T, breaking ties if needed
	function fansList(fans, T){

		if (T == 0)	return []
		if (T == N) return fans
		// quick and dirty approach: 
			// use the easiest sorting algo
			// to develop the approach
			// then optamize the algo later!

		// bubble sort for now, ascending order
		for (let i = 0; i< fans.length -1 ; i++){
			for (let j=0; j< fans.length - 1 - i; j++){
				if (fans[j].fanQ > fans[j+1].fanQ){
					let temp = fans[j]
					fans[j]  = fans[j+1]
					fans[j+1]= temp
				}
			}
		}	
		//console.log('sorted fans: \n')
		//console.log(fans)

		// traverse the sorted fans from end downwards
		let numFansToAdd = T
		let finalList = []
		let k = fans.length -1 
		while (numFansToAdd > 0){
			if (fans[k].fanQ > fans[k-1].fanQ){
				finalList.push(fans[k])
				numFansToAdd--
				k--
			}else if (fans[k].fanQ == fans[k-1].fanQ){
				// traverse through fans of same name and find the shortest name
				let tieBreaker = fans[k].name
				let quotient   = fans[k].fanQ
				let indexOfSmallest = k
				let i = k - 1
				
				while (fans[i].fanQ == quotient){
					// find a smaller name than the tieBreaker
					if (fans[i].name < tieBreaker){
						console.log(`swapping ${fans[i].name} with ${tieBreaker}`)
						tieBreaker = fans[i].name
						indexOfSmallest = i
					}					
					i--
				}
				//console.log([i, k])
				//swap only if ???
				if (indexOfSmallest !== k){
					let temp = fans[indexOfSmallest]
					fans[indexOfSmallest]	 = fans[k]
					fans[k] = temp
				}
				

				// populate final list
				finalList.push(fans[k])
				numFansToAdd--
				k--
			}
		}

		//console.log('Final fans List: \n')
		//console.log(finalList)
		return finalList

	}



	// Approach 2: create a hash map of possible fanQs as keys, (time complexity O(n))
	// each values being the list of names with that fanQ (array of names)
	// then sort the hashmap by keys, and store the results again in an array
	// (time complexity equal to the best sorting algo)
	// then traverse the sorted array, and populate the final list of names  
	// breaking ties/sorting arrays of names if needed
	// sort of like this https://www.hackerearth.com/submission/6958193/


	// Approach 3: solve it like a knapsack problem?



	let fans = [
		{'name': 'alex',  'fanQ': 3},
		{'name': 'alexa', 'fanQ': 3},
		{'name': 'bob',   'fanQ': 1},
		{'name': 'al',  'fanQ': 3},
		{'name': 'ale', 'fanQ': 3},
		{'name': 'alex',  'fanQ': 5}
	]

	let N = fans.length		// total number of fans
	let T = 4 				// fans the superstart 'Kali' can meet

	console.log(fansList(fans, T))


	// edge cases
	T = 0
	//console.log(fansList(fans, T))

	T = N
	//console.log(fansList(fans, T))

}