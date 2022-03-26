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

    // Time Complexity: ?
    // Space Complexity: ?
    add(key, value) {
        if (!this.root) {
            this.root = new TreeNode(key, value)
        } else {
            let current = this.root;
            while (current != null) {
                var parent = current;
                if (current.key > key) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
            if (parent.key > key) {
                parent.left = new TreeNode(key, value);
            } else {
                parent.right = new TreeNode(key, value);
            }
        }

    }

    // Time Complexity: ?
    // Space Complexity: ?
    find(key) {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while (current != null) {
            if (current.key === key) {
                return current.value;
            } else if (current.key < key) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return null

    }

    // Time Complexity: ?
    // Space Complexity: ?
    inorder() {
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