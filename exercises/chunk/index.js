// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//second way use slice method / easier to understand if you know what slice does
function chunk(array, size) {
    const chunked = []
    let index = 0

    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size
    }
    return chunked
}

module.exports = chunk;

//most obvious below
// function chunk(array, size) {
//     //declare new array that will hold all the different chunks
//     const chunked = []

//     //iterate over original array
//     for(let element of array) {
//         const last = chunked[chunked.length - 1]
        
//         if (!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             last.push(element)
//         }
//     }
//     return chunked
// }