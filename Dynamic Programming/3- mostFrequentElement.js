{
	// Most Frequent single Element

	// its a variation of the mostFrequentElements.js
		// In this case, I could just keep track of the 'mostFrequent' element while 
		// building the hash map, and wont need to sort the map/array in the end

	function mostFrequentElement(list){
		let mostFrequent = ''
		let highestFreq	 = 1
		let frequencies  = new Map()
		let currFreq = 0
		for (let i=0; i< list.length; i++){
			let key = list[i]
			if (frequencies.get(key)){
				currFreq = frequencies.get(key)
				currFreq++
			}else{
				currFreq = 1			
			}

			frequencies.set(key, currFreq)
			// find max(highestFreq, freq)	
			if (currFreq > highestFreq){
				highestFreq = currFreq
				mostFrequent = key
			}

		}

		//console.log(frequencies)
		//console.log([mostFrequent, highestFreq])
		return {'most Frequent Element':mostFrequent, 'Freq':highestFreq}
	}


	// Input:
	let list = [1,2,-1,1,4,5,1,6,7,2,6]
	console.log(mostFrequentElement(list))

	// Input:
	list = [1,2,-1,1,4,5,-1,-1,7,-1,6]
	console.log(mostFrequentElement(list))


	// Input:
	list = [1,2,1,1,4,5,6,6,6,2,6]
	console.log(mostFrequentElement(list))
}