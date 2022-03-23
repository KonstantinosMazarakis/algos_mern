class MinHeap{
    constructor(){
        this.heap = [null]
    }

    insert(value){
        //push value to the end of heap 
        this.heap.push(value)
        //declare a variable and name it curr for current value 
        let curr = this.heap.length-1
        //declare a variable and name it parent 
        let parent = Math.floor(curr/2)
        //compare the value of parent and value of current 
        while(this.heap[curr] < this.heap[parent]){
            //if the value at the current index is les than the value of parent index, then swap 
            [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]];
            //update current to be the parent , 
            curr = parent
            parent = Math.floor(curr/2)
        }
            return this.heap
    } 

    delete(){
        [this.heap[1], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[1]];
    //remove from the end of our array, set a variable to equal to the popped value 
    let output = this.heap.pop()
    // from the root, determine if the parent is less than the children, if they are not, swap with the smaller child
    let curr =1 
    let leftChild = curr*2
    let rightChild = curr*2+1
    // hint: to calculate the left child (parent index *2) and right child (parent index *2 +1)
    while (this.heap[curr]>this.heap[rightChild] || this.heap[curr]>this.heap[leftChild]){
        //if the value of the left child is smaller than the value of the right child , then swap the parent with the left child 
        if(this.heap[leftChild]<this.heap[rightChild]){
            [this.heap[curr],this.heap[leftChild]] = [this.heap[leftChild], this.heap[curr]];
            curr = leftChild
        }else{
            [this.heap[curr],this.heap[rightChild]] = [this.heap[rightChild], this.heap[curr]];
            curr = rightChild
        } leftChild = curr*2
        rightChild = curr*2+1  

    }
    return output

    }

}



let heap1 = new MinHeap();
heap1.insert(23)
heap1.insert(35)
heap1.insert(60)
heap1.insert(12)
heap1.insert(78)
heap1.insert(99)
console.log(heap1)