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

    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current= current.next;
        }
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
    get(index){
        if(index<0||index>this.length) return null;  
        var current = this.head;
        for(i=0;i<index;i++){
            current = current.next
        } 
        return current;
    }
    set(value,index){
        var node = this.get(index);
        if(node){
            node.val = value;
        }
        return node.val;
    }
    insert(value,index){
        var newNode = new Node(value);
        if(index<0 || index > this.length) return undefined;
        if(!this.head && this.length===0){
            this.head = newNode;
            this.tail = newNode;
            return true;
        }
        if(index===0){
            this.unshift(value);
            return true;
        }
        if(index===this.length){
            this.push(value);
            return true;
        }
        else{
            var prevNode = this.get(index-1);
            var nextNode = this.get(index+1);
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
        }
        this.length++;
        return newNode;
    }

}

var list = new doublyLinkedList();
list.push("hi");
list.push("I am");
list.push("arsh");
list.push("meharwal")
