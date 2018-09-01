{
	function findPrimeOccurance(arr){
        let memo = {}
   
        for (let i = 0; i< arr.length ; i++){
            let key = arr[i]
            
            if (!memo[key]){
                console.log(`adding ${key}`)
                memo[key] = 'odd'
            }else{
                console.log(`removing ${key}`)
                delete memo[key] 
            }
        }
        return memo
    }

    function findPrimeOccurance1(arr){
        let memo = new Map()
        
        for (let i = 0; i< arr.length ; i++){
            let key = arr[i]
            if (memo.get(key)){
                console.log(`removing ${key}`)
                memo.delete(key)
            }else{
                console.log(`adding ${key}`)
                memo.set(key, 'odd')
            }
        }
        return memo
    }


    let A =  [1, 1, 1, 1, 3, 3, 3, 2, 2]
    console.log(findPrimeOccurance1(A))
}