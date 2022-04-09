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

    // Time Complexity: O(log(n))
    // Space Complexity: O(log(n)) (because of the recursive stack)
    addHelper(currentNode, key, value) {
        if (currentNode === null) return new TreeNode(key, value);

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

    // Time Complexity: O(log(n))
    // Space Complexity: O(log(n)) (because of the recursive stack)
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
        return !this.root ? null : this.findHelper(this.root, key);
    }

    // Time Complexity: O(n) (visits every node in the tree)
    // Space Complexity: O(n) (result list)
    inorderHelper(currentNode, result) {
        if (currentNode !== null) {
            this.inorderHelper(currentNode.left, result);
            result.push(currentNode.data());
            this.inorderHelper(currentNode.right, result);
        }
    }

    inorder() {
        let result = [];
        this.inorderHelper(this.root, result);
        return result;
    }

    // Time Complexity: O(n) (visits every node in the tree)
    // Space Complexity: O(n) (result list)
    preorderHelper(currentNode, result) {
        if (currentNode !== null) {
            result.push(currentNode.data());
            this.preorderHelper(currentNode.left, result);
            this.preorderHelper(currentNode.right, result);
        }
    }

    preorder() {
        let result = [];
        this.preorderHelper(this.root, result);
        return result;
    }

    // Time Complexity: O(n) (visits every node in the tree)
    // Space Complexity: O(n) (result list)
    postorderHelper(currentNode, result) {
        if (currentNode !== null) {
            this.postorderHelper(currentNode.left, result);
            this.postorderHelper(currentNode.right, result);
            result.push(currentNode.data());
        }
    }

    postorder() {
        let result = [];
        this.postorderHelper(this.root, result);
        return result;
    }

    // Time Complexity: O(n) (worst case)
    // Space Complexity: O(n) (recursive stack)
    heightHelper(currentNode) {
        if (currentNode === null) return 0;
        return 1 + Math.max(this.heightHelper(currentNode.left), this.heightHelper(currentNode.right));
    }

    height() {
        return this.heightHelper(this.root);
    }

    // Optional Method
    // Time Complexity: O(n) (visits every node in the tree)
    // Space Complexity: O(2n) -> O(n) (queue + result)
    bfs() {
        let result = [];
        if (this.root === null) return result;

        let queue = [];
        queue.push(this.root);
        result.push(this.root.data());

        while (queue.length > 0) {
            let currentNode = queue[0];

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
                result.push(currentNode.left.data());
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
                result.push(currentNode.right.data());
            }

            queue.shift();
        }

        return result;
    }

    // Useful for printing
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;