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
    shift(){
        if(!this.head){
            return false;
        }
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            var oldHead = this.head;
            var newHead = this.head.next;
            this.head = newHead;
            this.head.prev = null;
            this.length--;
            return this;
        }

    }
    // unshift means adding a new head
  unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            var oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.prev = newNode;
            this.length++;
            return this;
        }
    }
}

var list = new doublyLinkedList();
list.push("hi");
list.push("I am");
list.push("arsh");
list.push("meharwal")
