class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function cNode(value) {
  return new Node(value);
}

class SearchTree {
  constructor(rootNode) {
    this.root = rootNode;
  }
  addNode(newNode) {
    if (!this.root) {
      this.root = newNode;
    } else {
      this._addNode(this.root, newNode);
    }
    return this;
  }
  _addNode(rootNode, newNode) {
    if (newNode.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = newNode;
      } else {
        this._addNode(rootNode.left, newNode);
      }
    } else {
      if (!rootNode.right) {
        rootNode.right = newNode;
      } else {
        this._addNode(rootNode.right, newNode);
      }
    }
  }
  inOrderTraverse() {
    const ret = [];
    function fn(node) {
      if (node !== null) {
        fn(node.left);
        ret.push(node.value);
        fn(node.right);
      }
    }
    fn(this.root);
    return ret;
  }
  preOrderTraverse() {
    const ret = [];
    function fn(node) {
      if (node !== null) {
        ret.push(node.value);
        fn(node.left);
        fn(node.right);
      }
    }
    fn(this.root);
    return ret;
  }
  postOrderTraverse() {
    const ret = [];
    function fn(node) {
      if (node !== null) {
        fn(node.left);
        fn(node.right);
        ret.push(node.value);
      }
    }
    fn(this.root);
    return ret;
  }
  min() {
    if (!this.root) return null;
    let cur = this.root;
    while (true) {
      if (cur.left) {
        cur = cur.left;
      } else {
        break;
      }
    }
    return cur;
  }
  max() {
    if (!this.root) return null;
    let cur = this.root;
    while (true) {
      if (cur.right) {
        cur = cur.right;
      } else {
        break;
      }
    }
    return cur;
  }
  searchNode(value) {
    function fn(node, value) {
      if (!node) return null;

      if (value > node.value) {
        return fn(node.right, value);
      } else if (value < node.value) {
        return fn(node.left, value);
      } else {
        return true;
      }
    }
    return fn(this.root, value);
  }
  toString() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}

const tree = new SearchTree();

/**
 *           8
 *     3        10
 *   1   6          14
 *         7      13
 *  */
const n1 = cNode(8);
const n2 = cNode(3);
const n3 = cNode(10);
const n4 = cNode(1);
const n5 = cNode(6);
const n6 = cNode(14);
const n7 = cNode(4);
const n8 = cNode(7);
const n9 = cNode(13);

tree
  .addNode(n1)
  .addNode(n2)
  .addNode(n3)
  .addNode(n4)
  .addNode(n5)
  .addNode(n6)
  .addNode(n7)
  .addNode(n8)
  .addNode(n9);
tree.toString();

console.log(tree.inOrderTraverse()); // [ 1, 3, 4, 6, 7, 8, 10, 13, 14 ]
console.log(tree.preOrderTraverse()); // [ 8, 3, 1, 6, 4, 7, 10, 14, 13 ]
console.log(tree.postOrderTraverse()); // [ 1, 4, 7, 6, 3, 13, 14, 10, 8 ]

console.log(tree.min().value); // 1
console.log(tree.max().value); // 14
console.log(tree.searchNode(0));
