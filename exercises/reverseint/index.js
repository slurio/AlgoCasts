// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Math.sign
//toString()
//parseInt()
//My solution below
// function reverseInt(n) {
//     let reversed = parseInt(n.toString().split('').reverse().join(''))
//     if(Math.sign(n) === -1){
//         return - reversed
//     }else {
//         return reversed
//     }
// }

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')

    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
