class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = undefined;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === undefined)
            this.root = newNode;
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) return undefined;

        if (node.data > data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (node.data < data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (!node.left && !node.right) {
                return null;
            } else if (node.left && !node.right) {
                return node.left;
            } else if (!node.left && node.right) {
                return node.right;
            } else {
                const minRight = this.findMinNode(node.right);
                node.data = minRight.data;

                node.right = this.removeNode(node.right, minRight.data);
                return node;
            }
        }
    }

    getRootNode() {
        return this.root;
    }

    findMinNode(node) {
        let currNode = node;

        while (currNode) {
            if (!currNode.left) {
                return currNode;
            }

            currNode = currNode.left;
        }

        return currNode;
    }

    inOrder(node) {
        if (!node) return;
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }

    preOrder(node) {
        if (!node) return;
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node) {
        if (!node) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }

    search(node, data) {
        if (!node) return undefined;

        if (data === node.data) {
            return node;
        }

        if (data < node.data) {
            return this.search(node.left, data);
        } else {
            return this.search(node.right, data);
        }
    }
}

function example() {
    let BST = new BinaryTree();

// Inserting nodes to the BinarySearchTree
    BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

    let root = BST.getRootNode();
    BST.inOrder(root);

// Removing node with no children
    BST.remove(5);


//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17


    root = BST.getRootNode();

// prints 7 9 10 13 15 17 22 25 27
    BST.inOrder(root);

// Removing node with one children
    BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17


    root = BST.getRootNode();

// prints 9 10 13 15 17 22 25 27
    BST.inOrder(root);

// Removing node with two children
    BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

    root = BST.getRootNode();
    console.log("inorder traversal");

// prints 9 10 13 17 22 25 27
    BST.inOrder(root);

    console.log("postorder traversal");
    BST.postOrder(root);
    console.log("preorder traversal");
    BST.preOrder(root);
}
