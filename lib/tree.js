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

  addHelper(current, newNode) {
    if (!current) return newNode;

    if (newNode.key < current.key) {
      current.left = this.addHelper(current.left, newNode);
    } else {
      current.right = this.addHelper(current.right, newNode);
    }
    return current;
  }
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
  add(key, value) {
    let newNode = new TreeNode(key, value);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.addHelper(this.root, newNode);
  }

  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  find(key) {
    let current = this.root;

    if (!current) return null;
  
    while (current) {
      if (key === current.key) {
        return current.value;
      } else if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  // Time Complexity: O(n)
  // Space Complexity: O(n)
  //smallest on the left, larger on the right
  inorderHelper(current, array) {
    if (current) {
      this.inorderHelper(current.left, array);
      array.push({ key: current.key, value: current.value });
      this.inorderHelper(current.right, array);
    }
  }

  inorder() {
    let travArr = [];

    this.inorderHelper(this.root, travArr);
    return travArr;
  }

  preorderHelper(current, array) {
    if (current) {
      array.push({ key: current.key, value: current.value });
      this.preorderHelper(current.left, array);
      this.preorderHelper(current.right, array);
    }
  }
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  //parents before children
  preorder() {
    let travArr = [];

    this.preorderHelper(this.root, travArr);
    return travArr;
  }

  postorderHelper(current, array) {
    if (current) {
      this.postorderHelper(current.left, array);
      this.postorderHelper(current.right, array);
      array.push({ key: current.key, value: current.value });
    }
  }
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  //children before parents
  postorder() {
    let travArr = [];

    this.postorderHelper(this.root, travArr);
    return travArr;
  }

  // Time Complexity: O(log n)
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
    return `${this.inorder()}`;
  }
}

module.exports = Tree;
