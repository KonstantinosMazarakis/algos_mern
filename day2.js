//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionSort(arr){
    for(let i = 0; i < arr.length;i++){
        while (arr[i] < arr[i-1] ){
        temp = arr[i-1] 
        arr[i-1] = arr[i]
        arr[i] = temp
        i--
        }
    }
    return arr
}


console.log(insertionSort([5,23,0,12,8,6])) //[0,5,6,8,12,23]
