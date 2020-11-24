// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//for loop to iterate through n
//count index/loop to figure out how many # to print
//until it reaches length === n

// Solution Two (Not Recommended) :
// Recursive Solution
function steps(n, row = 0, stair = '') {
   //define base case 1st
    if (n === row ) {
       return
    }

    if (n === stair.length) {
       console.log(stair)
       steps(n, row + 1)
       return
       // or return steps(n, row + 1)
    }

    // if (stair.length <= row) {
    //     stair += '#'
    // } else {
    //     stair += ' '
    // }
    //steps (n, row, stair)

    // or do terinary experssion
    const add = stair.length <= row ? '#' : ' '
    steps (n, row, stair + add)
}
 
module.exports = steps;

// Solution One (Recommended):
// From 0 to n (iterate through rows) (row is one string set)
// Create an emptry string 'stair'
// From 0 to n (iterate through columns)
// IF current column <= to current row add # to stair
// ELSE add space to stair
// console.log stair
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = ''
         
//         for (let column = 0; column < n; column ++) {
//             if (column <= row) {
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }

//         console.log(stair)
//     }
// }