function pivotIndex(numbers) {
    if (numbers.length == 0) return -1
    if (numbers.length == 1) return 0

    
    let leftSums = new Array()
    let rightSums = new Array()
    // for each index of given array, calculate and store sum of elements to the left of index  
    leftSums[0] = 0
    for (let i = 1; i < numbers.length; i++){
        leftSums[i] = leftSums[i-1] + numbers[i-1]
    }


    rightSums[numbers.length-1] = 0
    for (let i = numbers.length - 2; i >= 0; i--) {
        rightSums[i] = rightSums[i + 1] + numbers[i + 1]
    }

    for (let i = 0; i < numbers.length; i++){
        if (leftSums[i] == rightSums[i])    return i
    }
    return -1

}
