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
    traverse(){
        var currentVal = this.head
        while(currentVal){
            console.log(currentVal.val);
            currentVal = currentVal.next;
        }
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
    shift(){
        if(!this.head) return undefined;
         var currentHead= this.head ;
         var newHead = this.head.next;
         this.head = newHead;
         this.length--;
         return currentHead;

    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            var temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            console.log(temp.val);
        }
        this.length++;
        return this;
         
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
        if(index<0||index>this.length) return null;
        let node = this.get(index);
        if(node){
            node.val = value;
        }
        return this;
    }

    insert(value,index){
        if(index<0||index>this.length) return false;
        if(index===0){
            this.unshift(value);
            return true;
        }
        if(index === this.length){
            this.push(value);
            return true
        }
        
        let prevNode = this.get(index-1);
        let newNode = new Node(value);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;

        
    }
    remove(index){
        if(index<0||index>this.length) return false;
        if(index===0){
            this.shift();
            return true;
        }
        if(index === this.length-1){
            this.pop();
            return true;
        }
        
        let prevNode = this.get(index-1);
        let currentNode = prevNode.next.next
        prevNode.next = currentNode;
        this.length--;
        return true;    
    }
}


var jist = new SinglyLinkedList()
jist.push("JHI");
jist.push("HI");
jist.push("I am arsh");
jist.push("How are you");
jist.push("I am fine");
jist.set("God",1)
jist.insert("ARSH",3);
jist.remove(4);
