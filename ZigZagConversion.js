// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

function zigzag(s, numOfRows) {

    if (numRows === 1 || s.length <= numRows) return s;

    let row = Array.from({ length: Math.min(numOfRows, s.length) }, () => "")
    let currentRow = 0
    let goingDown = false
    for (const char of s) {
        row[currentRow] += char

        if (currentRow === 0 || currentRow === numOfRows - 1) goingDown = !goingDown

        currentRow += goingDown ? 1 : -1

    }
    return row.join("")
}

console.log("This is the zigzag:", zigzag("PAYPALISHIRING", 3))

