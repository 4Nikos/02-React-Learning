//PART 1
// Convert the given JavaScript into ES6 syntax using an arrow function and filter.
// const arr = [
//     {"name":"chevy", "count": 2},
//     {"name":"ford", "count": 5},
//     {"name":"acura", "count": 3},
//     {"name":"honda", "count": 16},
// ];
// const newArr = [];
// for(let i= 0; i < arr.length; i++){
//     if(arr[i].name === "ford" ){
//         newArr.push(arr[i]);
//     }
// }
// console.log("Filter results:", newArr);

//PART 1 ANSWER
//starts here|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const aFord = (arr) => {
    return arr.name === "ford"
}

const arr = [
    { "name": "chevy", "count": 2 },
    { "name": "ford", "count": 5 },
    { "name": "acura", "count": 3 },
    { "name": "honda", "count": 16 },
].filter(aFord);

//ends here|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ---------------------------------------------------------------------------
//PART 2
// Given the function, use the ES6 we covered to combine the two arrays.
// const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
// const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

// function addNewStudent(array, newArray) {
// for(let i = 0; i < newArray.length; i++) {
//     array.push(newArray[i]);
// }
// }
// addNewStudent(arr, newStudents);

//PART 2 ANSWER
//starts here|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// solution 1 
const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];
const allStudents = [...arr, ...newStudents];

// solution 2
const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const allStudents = [...arr, 'Andrew', 'Tasha', 'Carol', 'George'];
//ends here|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ---------------------------------------------------------------------------


