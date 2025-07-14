//string of brackets is balanced or valid

// ✅ Input: ((()(){})[]() → true

// ❌ Input: (()({)) → false

function isValidString(s) {
    const stack = []
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== map[char]) {
                return false
            }
        }
    }
    return stack.length === 0

}

console.log("IsValidString :", isValidString('(()){'))