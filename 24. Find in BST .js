class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    search(value){
        if(this.root === null){
            return false;
        }
        if(value === this.root.value){
            return true;
        }
        var found = false;
        var current = this.root
        while(current && !found){
            if(value > current.value){
                current = current.right;
                
            }
            else if(value < current.value){
                
                current = current.left
                
            }
            else{
            found = true
            }

        }
        return current; 
    }
}


var tree = new BinarySearchTree();
tree.insert(100);
tree.insert(80);
tree.insert(1);
tree.insert(20);
tree.insert(31);
tree.insert(105);
tree.insert(400);
