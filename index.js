import BinaryTree from "./BinaryTree.js";

// Create a tree
const tree = new BinaryTree();
tree.addNode(10);
tree.addNode(5);
tree.addNode(12);
tree.addNode(15);
tree.addNode(3);

console.log(tree);

// Usage
const node = tree.findNode(10);
const inorderNodes = tree.inorder(node);
const postorderNodes = tree.postorder(node);
const preorderNodes = tree.preorder(node);

console.log(node, inorderNodes, postorderNodes, preorderNodes);