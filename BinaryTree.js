class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {

    nodes = [];
    constructor() {
        this.root = null;
    }

    addNode(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(node);
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left)
            this.nodes.push(root.value)
            this.inorder(root.right)
        }
        return this.nodes;
    }

    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            this.nodes.push(root.value)
        }
        return this.nodes
    }

    preorder (root) {
        if (root) {
            this.nodes.push(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
        return this.nodes
    }

    findNumber(number) {
        let currentNode = this.root;
        let lookupNode;
        while (!lookupNode) {
            if (currentNode.value === number) {
                lookupNode = currentNode;
                break;
            }
            if(currentNode.left === null && currentNode.right === null){
                lookupNode = null;
                break;
            }
            if(currentNode.value > number) {
                currentNode = currentNode.left;
            }
            if(currentNode.value < number) {
                currentNode = currentNode.right;
            }
        }
        return lookupNode;
    }

    insertNode(newNode) {
        let currentNode = this.root;
        while(true){
            if(currentNode.value === newNode.value){
                return;
            }
            if(currentNode.value > newNode.value) {
                if (currentNode.left === null){
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            }
            if(currentNode.value < newNode.value) {
                if (currentNode.right === null){
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
}

let tree = new BinaryTree();
tree.addNode(10);
tree.addNode(5);
tree.addNode(12);
tree.addNode(15);
tree.addNode(3);

let node = tree.findNumber(10);
let order = tree.inorder(node);
console.log(order);





