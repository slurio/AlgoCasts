// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//His Recursive and Memoize Solution
function memoize(fn) {
    //storage area below
    const record = {}

    //below fast!! function
    ///...args means idk how many arguments this function will receive
    return function(...args){
        if (record[args]) {
            return record[args]
        }

        const result = fn.apply(this, args)
        record[args] = result

        return result
    }
}

function slowFib(n) {
    if (n < 2) {
        return n
    }

    return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib)

module.exports = fib

//His Recursive Solution
// function fib(n) {
//     if (n < 2) {
//         return n
//     }

//     return fib(n-1) + fib(n-2)
// }

//His Iterative Solution
// function fib(n) {
//     const result = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1]
//         const b = result[i - 2]
        
//         result.push(a + b)
//     }

//     return result[n]
// }


// //my solution!!
// function fib(n) {
//     //create fib array up to n
//     // return array[n]
//     let i = 0
//     let array = []
//     while( i <= n) {
//         if(array.length === 0) {
//             array.push(0)
//         } else if (array.length === 1){
//             array.push(1)
//         } else {
//             secondNum = array[array.length -1]
//             firstNum = array[array.length - 2]
//             array.push(secondNum + firstNum)
//         }
//         i++
//     }
//     return array[n]
// }