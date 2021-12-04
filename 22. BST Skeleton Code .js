class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(100);
tree.root.left = new Node(50);
tree.root.right = new Node(80);
tree.root.left.left = new Node(40);
