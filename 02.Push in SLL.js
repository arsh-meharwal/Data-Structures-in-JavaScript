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

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }
}


var list = new SinglyLinkedList()
list.push("HI");
list.push("I am arsh");
list.push("How are you");
