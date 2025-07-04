// map concep
const map = new Map();

map.set('name', 'Niranjan');
map.set(1, 'One');
map.set(true, 'Yes');

console.log("map:",map)

//set concept

const set = new Set();

set.add(2)
set.add(3,4)
set.add(2)

console.log("set:",set)


const sampNum = [1,2,22,2,3,4,2,5]

const uniqueNum = new Set(sampNum)


console.log("uniqueNum:",uniqueNum)
console.log("uniqueNum:",[...uniqueNum])
console.log("uniqueNumSize:",uniqueNum.size)

//unique string

const uniqueStr=(sampleStr) =>{

return [...new Set(sampleStr)].join('')
}

console.log("uniqueStr:",uniqueStr("Hello"))

// return the highest frequency character 

const string = "chennai"
let charCount ={}
for (let str of string){
charCount[str] = (charCount[str] || 0) + 1
}
// let sortBydescendingValues = Object.fromEntries(Object.entries(charCount).sort((a,b)=>b[1]-a[1]))

let [maxkey,maxValue] = Object.entries(charCount).reduce((a,b)=> a[1]>b[1] ? a : b)
console.log("a:",a)




// const sampstr3 = "Chennai"


// const uniqueStr3 = new Set(sampstr3)

// console.log("uniqueStr3:",uniqueStr3)

// console.log("charCount" ,charCount)

// const sortedinascen = Object.values(charCount).sort()

// console.log("sortedinascen:",sortedinascen)

// for(let char in charCount){
//     console.log(`${char} : ${charCount[char]}`)
// }

// const maxCount = Math.max(...Object.values(charCount))

// for(let char in charCount){
//     if(charCount[char] === maxCount){
//         console.log(`Highest character frequncy in the word ${string} is ${char} : ${charCount[char]} `)
//     }
// }


const sentence = "i am the free bird in the world"

let letterCount = {}

for(let letters of sentence){
letterCount[letters ] = (letterCount[letters] || 0) + 1
}

sortedCount = Object.fromEntries(Object.entries(letterCount).sort((a,b) => b[1] - a[1]))

console.log("sortedCount:",sortedCount)

const str = "Hello, World! @2025";

const strLetters = str.split('').filter(char => /[a-z]/i.test(char)).reduce((acc,char)=>{
acc[char] = (acc[char] || 0) + 1
return acc
},{})
console.log("strLetters:",strLetters)

// Write a function to count the frequency of each character in a string and return an object.
//Modify the above function to return only characters with the highest frequency.

const freqChar = (string) =>{
const charLength = string.split('').reduce((acc,char)=>{
    acc[char] = (acc[char] || 0) + 1
    return acc
},{})
const highestFrequrncy = Math.max(...Object.values(charLength))
let highestChar = {}
for(let char in charLength){
    if(charLength[char] === highestFrequrncy){
highestChar[char] = highestFrequrncy
    }
}
return highestChar
}

const result = freqChar("malayalam")
console.log("result:",result)



// // Given a string, return an array of characters sorted by descending frequency.

const sampleStr = "Banana"

const strLetterCount = sampleStr.split('').reduce((acc,char)=>{
    acc[char] = (acc[char] || 0) + 1
    return acc;
}, {})

const sortedDesc = Object.entries(strLetterCount).sort((a,b) => b[1] - a[1])


const desceCharArray = sortedDesc.map(([key,_]) => key)

const charAppearMoreOnce = sortedDesc.filter(([_,values])=>values>1).map(([key,_]) => key)
console.log("desceCharArray:",desceCharArray)
console.log("charAppearMoreOnce:",charAppearMoreOnce)

//  Remove duplicate characters from a string using Set.

const str2 = "Hello"



// console.log("str2:",str2)

