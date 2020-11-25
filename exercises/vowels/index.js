// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//2nd Solution using a regular expression
function vowels(str) {
    //match experssion returns array if found / if not found returns null
   const matches =  str.match(/[aeiou]/gi)
   return matches ? matches.length : 0
}

module.exports = vowels;

//My Solution
// function vowels(str) {
//     let count = 0
//     for(let letter of str.toLowerCase()) {
//         if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ) {
//             count += 1
//         }
//     }
//     return count
// }

//1st Solution
// function vowels(str) {
//     let count = 0
//     // const checker = 'aeiou'
//     // more clear to use array
//     const checker = ['a', 'e', 'i', 'o', 'u']

//     for (let char of str.toLowerCase()) {
//         //helper method
//         if (checker.includes(char)) {
//             count ++
//         }
//     }

//     return count
// }