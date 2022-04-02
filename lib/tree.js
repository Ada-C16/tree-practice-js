class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }

    data() {
        return { key: this.key, value: this.value };
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    addHelper(currentNode, key, value) {
        if (currentNode === null) {
            return new TreeNode(key, value);
        }

        if (key < currentNode.key) {
            currentNode.left = this.addHelper(currentNode.left, key, value);
        } else {
            currentNode.right = this.addHelper(currentNode.right, key, value);
        }
        return currentNode;
    }

    add(key, value) {
        if (!this.root) {
            this.root = new TreeNode(key, value)
        } else {
            this.addHelper(this.root, key, value);
        }
    }

    // Time Complexity: ?
    // Space Complexity: ?
    findHelper(currentNode, key) {
        if (currentNode === null) {
            return null;
        } 

        if (key < currentNode.key) {
            return this.findHelper(currentNode.left, key);
        } else if (key > currentNode.key) {
            return this.findHelper(currentNode.right, key);
        }
        return currentNode.value;
    }

    find(key) {
        if (!this.root) {
            return null;
        }
        
        return this.findHelper(this.root, key);
    }

    // Time Complexity: ?
    // Space Complexity: ?
    inorderHelper(currentNode, result) {
        if (currentNode !== null) {
            this.inorderHelper(currentNode.left, result);
            result.push({ key: currentNode.key, value: currentNode.value });
            this.inorderHelper(currentNode.right, result);
        }
    }

    inorder() {
        let result = [];
        this.inorderHelper(this.root, result);
        return result;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    preorder() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    postorder() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    height() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Optional Method
    // Time Complexity: ?
    // Space Complexity: ?
    bfs() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Useful for printing
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;