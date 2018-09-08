{
	// K most frequent elements in Array/List

	// Variation: return the single most common element (mostFrequentElement.js)

	function mostFrequentElements(list, k){
		let elementFrequencies = new Map()
		let freq = 0
		for (let i=0; i< list.length; i++){
			let key = list[i]
			//console.log(`element is ${key}`)

			if (elementFrequencies.get(key)){
				//console.log(`current frequency of ${key} is ${elementFrequencies.get(key)}`)
				freq = elementFrequencies.get(key) + 1
			}else{
				freq = 1
				//console.log(`current frequency of ${key} is ${freq}`)	
			}

			//console.log(`new frequency of ${key} is ${freq}`)				
			elementFrequencies.set(key, freq)
		}

		//console.log(elementFrequencies)

		// notes:
		/*
		the minimum frequency is 1. 
			each element appears exactly once
		the maximum frequency is list.length
			all the elements are the same

		So, we need a sorted list of the actual frequencies
		And we need to know the elements at each frequency
		We can store the above information in an array because we 
		know the size of this array will be 'list.length' and we wont 
		be using the index 0

		each index is the actual frequency value, and we need to store, 
		at each index, an array of all the elements which has that frequency

		*/
		let sortedFrequencies = new Array(list.length + 1)

		// traverse the hashmap
		for (const [key, value] of elementFrequencies.entries()){
			if (sortedFrequencies[value]){
				sortedFrequencies[value].push(key)
			}else{
				sortedFrequencies[value] = new Array()
				sortedFrequencies[value].push(key)
			}
		}
		//console.log(sortedFrequencies)

		let results = []
		for (let i=sortedFrequencies.length; i> 0; i--){
			let elements = sortedFrequencies[i]
			//console.log(elements)
			if (elements){
				for (let j=0; j< elements.length; j++){
					if (results.length < k){
						let obj = {
							'element': elements[j],
							'frequency': i
						}
						results.push(obj)
					}
				}
			}			
		}
		return results 	// TODO: return only the first K elements
	}


	// Input:
	let list = [1,2,-1,1,4,5,1,6,7,2,6]
	let    k = 2

	console.log('Results: ')
	console.log(mostFrequentElements(list, k))

	// Input:
	list = [1,2,-1,1,4,5,1,6,7,2,6]
	   k = 3
	
	console.log('Results: ')
	console.log(mostFrequentElements(list, k))


	// Input:
	list = [1,2,1,1,4,5,6,6,6,2,6]
	   k = 4
	
	console.log('Results: ')
	console.log(mostFrequentElements(list, k))
}