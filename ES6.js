let a = new Map()
a.set('name','nandy')
a.set('c',40)
a.set('d',10)
a.set('a',7)
a.set('b',3)
let sortedByKey = new Map(
  [...a.entries()].sort((a, b) => a[0].localeCompare(b[0]))
);
console.log("sortedByKey:",sortedByKey)
console.log("a:",a)



let a = new Map()
a.set('name','nandy')
a.set('c',40)
a.set('d',10)
a.set('a',7)
a.set('b',3)
let sortedByValue = new Map([...a.entries()].filter(([,value])=>typeof value === 'number')
.sort((a,b)=>a[1]-b[1]))
console.log("sortedByValue:",sortedByValue)
console.log("a:",a)