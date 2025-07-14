//Write a function countProperties(obj) that returns the number of keys in the object.

const countProperties = (obj) =>{
    let objKeys = Object.keys(obj)
    return objKeys.length
}
console.log(countProperties({ a: 1, b: 2, c: 3 }))

// Write a function doubleValues(obj) that returns a new object where every value is doubled.

const doubleValues = (obj) =>{

    const doubleVal = Object.fromEntries(
        Object.entries(obj).map(([key,value]) =>[key,value * 2])
    )
    return doubleVal
}

console.log("doubleValues:",doubleValues({ a: 1, b: 2 }))


//Write a function filterByValue(obj, min) that returns a new object containing only the key-value pairs where the value is greater than or equal to min.

const filterByValue = (obj, min) =>{
    const filteredValue = Object.fromEntries(Object.entries(obj).filter(([_,values])=>values > min))
    return filteredValue;

} 
console.log(filterByValue({ a: 10, b: 5, c: 15 }, 10))

//Write a function swapKeyValue(obj) that swaps the keys and values in an object.

const swapKeyValue = (obj) =>{
const swappedObj = Object.fromEntries(Object.entries(obj).map(([key,value])=> [value,key]))
return swappedObj
}
console.log(swapKeyValue({ one: 1, two: 2 }))

//Write a function mergeObjects(obj1, obj2) that returns a new object merging both objects using the spread operator.
const mergeObjects = (obj1, obj2) =>{
    return{...obj1,...obj2}

}
console.log(mergeObjects({ a: 1 }, { b: 2, c: 3 }))


