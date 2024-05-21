// ,,
//Question-2: Write a function called "getLongestWords" that takes in an array of strings as an argument and returns the longest word from the input array.

const arr = ["javaScript", "java" ,"python"]; // Don't modify this array

// method one 

// function getLongestWords(array){
    // return array.sort((a , b) => {
        // return b.length - a.length;
    // }).slice(0 , 1);
// }

// console.log(getLongestWords(arr));
// console.log(...getLongestWords(arr));



// method two

function getLongestWords(array){
    let maxLength = 0;
    let longestWord = "";

    for(let arr = 0 ; arr < array.length ; arr++){
        if(array[arr].length >  maxLength){
            maxLength = array[arr].length;
            longestWord = array[arr];
        }
    }
    return longestWord;
}

console.log(getLongestWords(arr));