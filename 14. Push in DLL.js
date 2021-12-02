class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        var Head = this.head;
        var tail = this.tail;
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            
        }
        this.length++;
        return this;
    }
}

var list = new doublyLinkedList();
list.push("hi");
list.push("I am");
list.push("arsh");
