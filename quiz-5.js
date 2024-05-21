// ? Question-4:write a function called countChar that has two arguments. first one is a word and second one is a character. your function has to count how many of that character exists in the word.
// Note:Check both uppercase character and lowercase character for each character

function countChar(word , char){
    const wordLower = word.toLowerCase();
    const charLower = char.toLowerCase();

    return wordLower.split("").filter((i) => {
        return i === charLower;
    }).length;
}

console.log(countChar("mahdi rezainiya" , "i" ));