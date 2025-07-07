// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSumInArr(arr1,target){

    let map = new Map()
    for(i=0;i<arr1.length;i++){
        let complement = target - arr1[i];

        if(map.has(complement)){
            return([map.get(complement),i])
        }
        map.set(arr1[i],i)
    }

}
console.log(twoSumInArr([1,3,2,5,7],7))