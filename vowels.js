
const numbOfVowels = (str) =>{
const vowels = ['a','e', 'i', 'o', 'u']
let count = 0;
for(let char of str){
   if(vowels.includes(char)){
    count++
   }
}
return count

}

console.log("the number of vowels in the string",numbOfVowels("Hello World!"))