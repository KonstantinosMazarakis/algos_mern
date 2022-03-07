//https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/


function bubbleSort(arr){
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if (arr[j] > arr [j + 1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }

    }
    return arr
}

console.log(bubbleSort([5,23,0,12,8,6])) //[0,5,6,8,12,23]