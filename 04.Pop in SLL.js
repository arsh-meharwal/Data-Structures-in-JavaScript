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
  // popping from tail.
    pop(){
        let current = this.head;
        let newtail = current;

        if(!this.head){
            return undefined;
        }
        else{
            while(current.next){
                newtail = current;
                current = current.next; 
            }

        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
        
    }
}


var jist = new SinglyLinkedList()
jist.push("JHI");
jist.push("HI");
jist.push("I am arsh");
jist.push("How are you");
jist.push("I am fine");
