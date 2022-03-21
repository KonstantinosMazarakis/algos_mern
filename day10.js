// 1. Intersect Sorted Arrays
// Given two sorted arrays, return a new array containing all the numbers they have in common
// This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

function IntersectArrays(arr1, arr2) {
    newArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let x = 0; x < arr2.length; x++) {
            if (arr1[i] == arr2[x]) {
                newArr.push(arr1[i])
                x = arr2.length
            }
        }
    }
    return newArr
}

console.log(IntersectArrays([2, 4, 7, 9, 10], [2, 3, 5, 7, 9, 10]))
console.log(IntersectArrays([1, 1, 4, 5, 8], [1, 1, 1, 5, 6, 8]))
console.log(IntersectArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]))