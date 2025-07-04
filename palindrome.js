const isPalindrome = (str) => {

const alphanum = str.toLowerCase().replace(/[^a-z]/g, '')
const reversedStr = alphanum.split('').reverse().join('')
return reversedStr === alphanum
}

console.log("Is the given string palindrome:",isPalindrome("ma/3da3@m  *!='"))


const str1= "Hello"
let reverseStr = ""

for(let i= str1.length-1 ; i >=0 ; i--){
   reverseStr += str1[i]
}

if(reverseStr === str1){
    console.log(`The given string ${str1} is palindrome`)
}

else{
    console.log(`The given string ${str1} is not palindrome`)
}

const withoutInbuiltPalindrome  = (str1) =>{
    let left= 0

let right = str1.length -1

while(left < right){
if(str1[left] !== str1[right]){
    return false
}
left++;
right--
}
return true
}

console.log("palin:",withoutInbuiltPalindrome("madam"))



