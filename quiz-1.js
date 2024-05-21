// Question1:
// In the array of names, search and log the names that their length is 5.

const names = [
  "Liam",
  "Noah",
  "Oliver",
  "Mahdi",
  "Elijah",
  "William",
  "Henry",
  "Gabriel",
  "Lucas",
  "Benjamin",
  "Theodore",
  "Mateo",
  "Hudson",
  "Levi",
  "Sebastian",
  "Daniel",
  "Jack",
  "Michael",
  "Alexander",
  "Owen",
  "Asher",
  "amuel",
];

// method one
let filterNames = [];

const filteringNames = names.filter((i) => {
  // if(i.length === 5){
  //   filterNames.push(i);
  // }

  return i.length ===5 ;
})
// console.log(...filterNames);
console.log(filteringNames);

// method two
// for(let i = 0 ; i < names.length ; i++){
//   if(names[i].length === 5){
//     console.log(names[i]);
//   }
// }



