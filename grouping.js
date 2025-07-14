// Given an array of employee objects, group by id and add the salaries for matching IDs.

function groupAndSumById(employees){
    const map = new Map()

    for(const employee of employees){
        if(map.has(employee.id)){
            existing = map.get(employee.id)
            existing.salary += employee.salary
        }else{
            map.set(employee.id,{...employee})
        }
    }
    return Array.from(map.values())

}

console.log("Group and sum by id :", groupAndSumById([
  { id: 1, name: "Alice", salary: 1000 },
  { id: 2, name: "Bob", salary: 1200 },
  { id: 1, name: "Alice", salary: 1500 },
  { id: 3, name: "Carol", salary: 2000 },
  { id: 2, name: "Bob", salary: 800 },
  {id:3,salary: 100000}
]))