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
// -------------------------ADD----------------------------------------------
    add(key, value) {
        if (!this.root){
            this.root = new TreeNode(key,value)
        } else {
            this.addHelper(key, value, this.root)
        }
    }

    addHelper(key, value, current){
        if (!current) {
            let newNode = new TreeNode(key, value)
            return newNode
        }
        if (key>current.key) {
            current.right = this.addHelper(key, value, current.right)
        } else {
            current.left = this.addHelper(key, value, current.left)
        }
        return current
    }
// -------------------------ADD----------------------------------------------


// -------------------------FIND----------------------------------------------
    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    find(key) {
        let current = this.root
        while (current) {
            if (current.key === key){
                return current.value}
            current = (key>current.key)? current.right:current.left
        }
        return null
    }
// -------------------------FIND----------------------------------------------


// -------------------------INORDER----------------------------------------------

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    inorder() {
        let inorderArray = []
        this.inorderHelper(this.root, inorderArray)
        return inorderArray
    }
    
    
    inorderHelper(current, arr) {
        if (current){
            this.inorderHelper(current.left, arr)
            arr.push({"key":current.key,"value":current.value})
            this.inorderHelper(current.right, arr)
        }
        return arr
    
    }
// -------------------------INORDER----------------------------------------------


// -------------------------PREORDER----------------------------------------------
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    preorder() {
        let preorderArray = []
        this.preorderHelper(this.root,preorderArray)
        return preorderArray
    }

    preorderHelper(current, arr) {
        if (current) {
            arr.push({"key":current.key,"value":current.value})
            this.preorderHelper(current.left,arr)
            this.preorderHelper(current.right,arr)
        }
        return arr
    }
// --------------------------PREORDER-----------------------------------------------

// --------------------------POSTORDER----------------------------------------------
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    postorder() {
        let postorderArray = []
        this.postorderHelper(this.root,postorderArray)
        return postorderArray
    }

    postorderHelper(current, arr) {
        if (current) {
            this.postorderHelper(current.left,arr)
            this.postorderHelper(current.right,arr)
            arr.push({"key":current.key,"value":current.value})
        }
        return arr
    }
// --------------------------POSTORDER----------------------------------------------


// ---------------------------HEIGHT------------------------------------------------
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    height() {
        return this.heightHelper(this.root, 0)
    }

    heightHelper(current, height) {
        if (!current) {
            return 0
        }
        return 1 + Math.max(this.heightHelper(current.left,height),this.heightHelper(current.right,height))
    }
// ---------------------------HEIGHT------------------------------------------------



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