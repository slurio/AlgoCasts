// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//regexp mozilla docs / regular expression
//to remove ! and space   .replace(/[^\w]/g, "")
//toLowerCase()
function anagrams(stringA, stringB) {

    return cleanString(stringA) === cleanString(stringB)
}

//helper method
function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

module.exports = anagrams;


//FIRST SOLUTION
// function anagrams(stringA, stringB) {
    //good to create helper functions
//     const aCharMap = buildCharMap(stringA)
//     const bCharMap = buildCharMap(stringB)

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false
//     } 

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false
//         }
//     }
//     return true
// }

//create character map for string
// function buildCharMap(str) {
//     const charMap = {}

//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1
//     }

//     return charMap
// }