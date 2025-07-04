const isPrime = (number) =>{
for(let i=2;i<=number/2;i++){
    if(number%i=== 0){
        return `the number is not prime`
    }
}
return `the number is prime`
}

console.log("isPrime:",isPrime(7))