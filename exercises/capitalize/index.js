// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



//slice method .slice(1)
//str[0].toUpperCase()
//His 2nd Solution / not strongest choice
function capitalize(str) {
    let result = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase()
        }else {
            result += str[i]
        }
    }

    return result
}

module.exports = capitalize;

//His 1st Solution
// function capitalize(str) {
//     const words = []

//     for(let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return words.join(' ')
// }

//slice method .slice(1)
//str[0].toUpperCase()
//My Solution
// function capitalize(str) {
//     let strArray = str.split(' ')
//     let sent = []
//     for(const element of strArray) {
//         sent.push([element[0].toUpperCase() + element.slice(1)])
//     }
//     return sent.join(' ')
// }