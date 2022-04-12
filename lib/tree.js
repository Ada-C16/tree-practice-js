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

    // Time Complexity: ?
    // Space Complexity: ?
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

    // Time Complexity: ?
    // Space Complexity: ?
    inorder() {
        // left, current, right
        throw new Error("This method hasn't been implemented yet!");
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