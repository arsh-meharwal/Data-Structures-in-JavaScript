class Node{
    constructor(val){
        this.val = val;
        this.next = null; 
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = null;
    }
}

var first= new Node ("arsh");
first.next = new Node("is a winner");
first.next.next = new Node("will be a winner")
