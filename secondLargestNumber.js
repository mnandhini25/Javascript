function largestNumInArray(arr){
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    let thirdLargest = -Infinity
    let least = Infinity

    for (const num of arr){
        if(num > firstLargest ){
            thirdLargest = secondLargest;
            secondLargest = firstLargest
            firstLargest = num
        }else if(num > secondLargest && num < thirdLargest){
            thirdLargest = secondLargest
            secondLargest = num
        }else if(num > thirdLargest){
            thirdLargest = num
        }
        if(num < least){
            least = num
        }
    }
    console.log("firstLArgest:",firstLargest)
        console.log("secondLargest:",secondLargest)
            console.log("thirdLargest:",thirdLargest)



    return {
        first : firstLargest !== -Infinity ? firstLargest : null, 
        second : secondLargest !== -Infinity ? secondLargest : null
    }
}
console.log(largestNumInArray([10,2,40,22,78,2,1,99]))