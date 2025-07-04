// built in 

const isAnangram = (str1,str2) =>{

    const alphaStr1 = str1.toLowerCase().replace(/[^a-z]/g , '')
    const sortStr1 = alphaStr1.split('').sort().join('')
    console.log("sortStr1:",sortStr1)

    const alphaStr2 = str2.toLowerCase().replace(/[^a-z]/g , '')
    const sortStr2 = alphaStr2.split('').sort().join('')
    console.log("sortStr1:",sortStr2)

    return sortStr1 === sortStr2

}

console.log("Is the Word (silent) Anagram:",isAnangram('silent','listen'))


const isManualAnagram = (str1,str2) =>{
    const alphaStr1 = str1.toLowerCase().replace(/[^a-z]/g , '')
    const alphaStr2 = str2.toLowerCase().replace(/[^a-z]/g , '')
let charSet = {}
    for(let char of alphaStr1){
        charSet[char] = (charSet[char] || 0) + 1
    }

    for(let char of alphaStr2){
        if(charSet[char] === 0) return false

        else {``
            charSet[char]--;
        }
    }
    return true

}

console.log("is this manualAnagram:",isManualAnagram('i241)sh','h43@@is'))
