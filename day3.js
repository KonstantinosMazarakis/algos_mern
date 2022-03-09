//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/



const selectionSort = (arr)=>{

    let arrIndexEnd = arr.length-1
    for (let i = 0; i < arr.length -1; i++){
        bigindex = 0
        for (let j = 1; j < arrIndexEnd; j++){
            if (arr[j] > arr[bigindex]){
                bigindex = j
            }
        }
        [arr[arrIndexEnd], arr[bigindex]] = [arr[bigindex], arr[arrIndexEnd]]
        arrIndexEnd--
    }
    return arr
}

console.log(selectionSort([4,8,5,2,1,0,9,7]))
