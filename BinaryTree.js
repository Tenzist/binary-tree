import Node from "./Node.js";

export default class BinaryTree {
    root = null;
    inorderedNodes = [];
    postorderedNodes = [];
    preorderedNodes = [];

    addNode(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.#insertNode(node);
        }
    }

    inorder(node) {
        if (node) {
            this.inorder(node.left)
            this.inorderedNodes.push(node.value)
            this.inorder(node.right)
        }

        return this.inorderedNodes;
    }

    postorder(node) {
        if (node) {
            this.postorder(node.left)
            this.postorder(node.right)
            this.postorderedNodes.push(node.value)
        }

        return this.postorderedNodes;
    }

    preorder (node) {
        if (node) {
            this.preorderedNodes.push(node.value)
            this.preorder(node.left)
            this.preorder(node.right)
        }
        return this.preorderedNodes;
    }

    findNode(value) {
        let currentNode = this.root;
        let lookupNode;

        while (!lookupNode) {
            if (currentNode.value === value) {
                lookupNode = currentNode;
                break;
            }

            if(currentNode.left === null && currentNode.right === null){
                lookupNode = null;
                break;
            }

            if(currentNode.value > value) {
                currentNode = currentNode.left;
            }

            if(currentNode.value < value) {
                currentNode = currentNode.right;
            }
        }

        return lookupNode;
    }

    #insertNode(newNode) {
        let currentNode = this.root;

        while(true){
            if(currentNode.value === newNode.value) return;

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