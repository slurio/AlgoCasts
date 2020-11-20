// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//My solution but cleaned up true/false 
function palindrome(str) {
    reverse = ''
    for(const character of str){
        reverse = character + reverse
    }
    
    return reverse === str
}

module.exports = palindrome;

//My solution
// function palindrome(str) {
//     reverse = ''
//     for(const character of str){
//         reverse = character + reverse
//     }
//     if(reverse === str){
//         return true
//     }else {
//         return false
//     }
// }

//His 1st solution
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('')

//     return str === reversed
// }

//His 2nd solution but not the best way to solve it 
// function palindrome(str) {
//     return str.split('').every((char, index)=>{
//         return char === str[str.length - index - 1]
//     })
// }