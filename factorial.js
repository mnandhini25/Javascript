const factorial = (num) =>{
    let factorial = 1
    for(let i=1;i<=num;i++){
        factorial *=i
    }
    return factorial
}

console.log("factorial:",factorial(5))

//Removing white spaces

const removeSpace = (str) =>{
  return str.replace(/\s/g,'')
}

console.log("RemovedWhiteSpaceStr:",removeSpace("Hell  o  World!"))