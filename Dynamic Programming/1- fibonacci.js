{
	// Fibonacci series in 3 Different ways
	// 0, 1, 0+1, 1+1, 2+1, 3+2, ....
	// 0, 1, 1, 2, 3, 5, ....
	// 0, 1, 1, ..., (fib(i-1) + fib(i-2))


	function fib_recursive(n){
		
		let result = 0
		// base case
		if (n <= 1){	result = n }
		else{
			result = fib_recursive(n-1) + fib_recursive(n-2)
		}

		return result

	}
	

	// idea is to store results which are calculated more than once
	function fib_dynamicProgramming(n, mem){
		let result = 0
		// if the value is already calculated
		if (n <= 1){	result = n }	
		else{
			if (mem[n]){
				result = mem[n]		// memoization
			}else{					// recursiveness
				result = fib_dynamicProgramming(n-1, mem) + fib_dynamicProgramming(n-2, mem)
			}

			mem[n] = result
		}
		
		return result

	}


	function fib_bottomUp(){
		

	}



	// input:
	let N, t0, t1

console.log("****** fib_recursive *******")
	N = 5
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_recursive(N)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_recursive(${N}): ${(t1 - t0)} milliseconds.`)
	// 0 milliseconds

	N = 25
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_recursive(N)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_recursive(${N}): ${(t1 - t0)} milliseconds.`)
	// 2.4 milliseconds

	N = 35
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_recursive(N)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_recursive(${N}): ${(t1 - t0)} milliseconds.`)
	// 152.9 milliseconds



	// N = 45 is 19 seconds already

// too much to handle already
	/*
	N = 50
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_recursive(N)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_recursive(${N}): ${(t1 - t0)} milliseconds.`)
	// 230 seconds!	

	N = 100
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_recursive(N)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_recursive(${N}): ${(t1 - t0)} milliseconds.`)
	*/



// Call the 2nd version
console.log("\n\n****** fib_dynamicProgramming *******")
	let memArr
	N = 5
	memArr = new Array(N + 1)	// we keeping index 0 empty
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_dynamicProgramming(N, memArr)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_dynamicProgramming(${N}): ${(t1 - t0)} milliseconds.`)
	// 0 milliseconds

	N = 25
	memArr = new Array(N + 1)	// we keeping index 0 empty
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_dynamicProgramming(N, memArr)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_dynamicProgramming(${N}): ${(t1 - t0)} milliseconds.`)
	// 0 milliseconds

	N = 35
	memArr = new Array(N + 1)	// we keeping index 0 empty
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_dynamicProgramming(N, memArr)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_dynamicProgramming(${N}): ${(t1 - t0)} milliseconds.`)
	// 0 milliseconds

	N = 100
	memArr = new Array(N + 1)	// we keeping index 0 empty
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_dynamicProgramming(N, memArr)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_dynamicProgramming(${N}): ${(t1 - t0)} milliseconds.`)
	// 0 milliseconds

	N = 1000
	memArr = new Array(N + 1)	// we keeping index 0 empty
	t0 = performance.now()
	console.log(`Fib(${N}) = ${fib_dynamicProgramming(N, memArr)}`)
	t1 = performance.now()
	console.log(`\tExecution Time of fib_dynamicProgramming(${N}): ${(t1 - t0)} milliseconds.`)
	// 0 milliseconds

}