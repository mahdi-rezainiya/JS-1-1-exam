// ? Question-3: Write a function that takes a number as an argument. then it counts the even numbers between 0 and including that number

function countEvenNumbers(num) {
  let even = [];
  let countEven =  0;
  for (i = 0; i <= num ; i+= 2) {
    even.push(i);
    countEven ++;
  }
  return `${even} : count ${countEven}`;
}

console.log(countEvenNumbers(20));