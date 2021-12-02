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
// POP Removes values from the end of the list
    pop(){
        var newTail = this.tail.prev;
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return this;
    }
}

var list = new doublyLinkedList();
list.push("hi");
list.push("I am");
list.push("arsh");
list.push("meharwal")
