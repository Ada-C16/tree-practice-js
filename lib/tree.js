class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    add(key, value) {
        let newNode = new TreeNode(key, value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (current) {
            if (newNode.key < current.key) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                else { current = current.left }
            } else if (newNode.key > current.key) {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                else { current = current.right }
            }
        }

        return;

    }

    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    find(key) {
        // compare keys
        if (!this.root) return null
        let current = this.root;
        while (current) {
            if (key === current.key) return current.value;
            else if (key < current.key) {
                if (!current.left) return null
                current = current.left;
            } else if (key > current.key) {
                if (!current.right) return null
                current = current.right;
            }
        }
    }

    createNodeObject(node) {
        return { key: node.key, value: node.value }
    }

    inorderHelper(node, arr) {
        if (!node) return;
        this.inorderHelper(node.left, arr);
        arr.push(this.createNodeObject(node));
        this.inorderHelper(node.right, arr);
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    inorder() {
        let arr = [];
        if (!this.root) return arr;

        this.inorderHelper(this.root, arr);

        return arr

    }

    preorderHelper(node, arr) {
        if (!node) return;
        arr.push(this.createNodeObject(node));
        this.preorderHelper(node.left, arr);
        this.preorderHelper(node.right, arr);
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    preorder() {
        let arr = [];
        if (!this.root) return arr;

        this.preorderHelper(this.root, arr);

        return arr
    }

    postorderHelper(node, arr) {
        if (!node) return;
        this.postorderHelper(node.left, arr);
        this.postorderHelper(node.right, arr)
        arr.push(this.createNodeObject(node))
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    postorder() {
        let arr = [];
        if (!this.root) return arr;

        this.postorderHelper(this.root, arr);

        return arr;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(1)
    height(root = this.root) {        
        if (!root) return 0;

        return 1 + Math.max(this.height(root.left), this.height(root.right));

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