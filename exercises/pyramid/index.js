// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
   
    //define base case first
    if (row === n) {
        return
    }

    if (level.length === 2 * n - 1) {
        console.log(level)
        pyramid(n, row + 1)
        return
    }

    const midpoint = Math.floor((2 * n - 1) / 2)
    let add
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }
    
    pyramid(n, row, level + add)
}

module.exports = pyramid;

//n is rows
// columns will differ by odd
// function pyramid(n) {
    //calcualte mid of our row
    // const midpoint = Math.floor((2 * n - 1) / 2)

    // for (let row = 0; row < n; row++) {
    //     let level = ''

        // to get the number of columns we need to double n and subtract by 1
//         for(let column = 0; column < 2 * n -1; column ++) {
//             if (midpoint -  row <= column && midpoint + row >= column) {
//                 level += '#'
//             } else {
//                 level += ' '
//             }
//         }
       
//         console.log(level)
//     }
// }


// my recursive solution
// function pyramid(n, row = 0, column = 0, level = '') {
//     const midpoint = Math.floor((2 * n - 1) / 2)
//     const columnNum = 2 * n - 1
    //define base case first
//     if (row === n) {
//         return
//     }

//     if (columnNum === level.length) {
//         console.log(level)
//         pyramid(n, row + 1)
//         return
//     }

//     if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#'
//     } else {
//         level += ' '
//     }
    
//     pyramid(n, row, column + 1, level)
// }