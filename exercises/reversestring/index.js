// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//My solution below
function reverse(str) {
    let reverseWord = ''
// avoid using below syntax
    for(i=0; i < str.length; i++){
        letter = str[i]
        reverseWord = letter + reverseWord
    }
    return reverseWord
}


module.exports = reverse;

// His solution: reverse() for arrays 
// function reverse(str) {
    // const array = str.split('');
    // array.reverse();
    // return array.join('');
//     return str.split('').reverse().join('')
// }

// Additional solution
// function reverse(str) {
//     let reversed = '';
    //use for of loop
//     for(let character of str) {
//         reversed = character + reversed
//     }

//     return reversed
// }

//Additional solution to WOW them
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '')
// }