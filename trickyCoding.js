let result = 5 - - '3'
console.log("result:",result)


// Write a function to reverse a string
// with built in fn and without

const reverseString = (str) =>{
    return str.split('').reverse().join('')
}
console.log("reverseString:",reverseString("NAndhini"))

const givenStr = "Nandhini"

console.log("givenStr:",givenStr[3])
let revStr = ""

for(let i = givenStr.length -1 ; i >= 0 ; i--){
    revStr += givenStr[i]
}

console.log("revStr:",revStr)

// write the longest word in string

const longestWord = (sentence) =>{
const word = sentence.split(' ')
let longest = ""

 word.forEach(eachWord =>{
    if(eachWord.length > longest.length){
        longest = eachWord
    }
})
return longest
}

console.log("the largest word is:",longestWord("The quick brown fox jumps over the lazy dog"))

const givStr = "The quick brown fox jumps over the lazy dog"
let currentWord = ""
let LongWord = ""

for(let char of givStr){
    if(char != " "){
        currentWord += char
    }
    else if(currentWord.length > LongWord.length) {
        LongWord = currentWord
    }
    else{
        currentWord = ""
    }
}
console.log("longWord:",LongWord)





