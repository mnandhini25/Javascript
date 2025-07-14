//  Create an Array of Repeated Values
// Array.from
const repeatedArray = Array.from({ length: 5 }, () => "Hi")

console.log("repeatedArray:", repeatedArray)

//Generate a Range of Numbers

const generateRange = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

console.log("generateRange:", generateRange(1, 19))

//Count Character Occurrences

const characterOccurences = (str) => {
    const strObject = Array.from(str)
    console.log("strObject:", strObject)
    let charFrequency = {}
    for (let char of strObject) {
        charFrequency[char] = (charFrequency[char] || 0) + 1
    }
    console.log(charFrequency)

    const sortedEntries = (Object.entries(charFrequency).sort((a, b) => b[1] - a[1]))
    let [highestFrequencyCharacter, highestFrequency] = sortedEntries[0]
    return { highestFrequencyCharacter, highestFrequency }
}

console.log(characterOccurences("chennai"))


//Instead of sorting (which is O(n log n)), you can also find the max in one pass using a simple loop for better performance. 


const characterOccurence = (str) => {
    const strObject = Array.from(str)
    console.log("strObject:", strObject)
    let charFrequency = {}
    let maxFreqChar = '' 
    let maxCount = 0
    for (let char of strObject) {
        charFrequency[char] = (charFrequency[char] || 0) + 1

        if(charFrequency[char] > maxCount){
            maxCount = charFrequency[char]
            maxFreqChar = char
        }
    }
   
    return { "highestFrequencyCharacter" : maxFreqChar , "highestFrequency" : maxCount }
}

console.log(characterOccurence("chennai"))