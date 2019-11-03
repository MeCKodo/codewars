class Node {
  constructor(value) {
    this.value = value;
  }
}

function createNode(value) {
  return new Node(value);
}

class BinaryTree {
  constructor(size, rootNode) {
    this.size = size;
    this.nodes = [];
    for (let i = 0; i < size; i++) {
      this.nodes[i] = 0;
    }

    this.nodes[0] = rootNode;
  }
  searchNode(index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    if (this.nodes[index] === 0) {
      return false;
    }
    return this.nodes[index];
  }
  addNodeWithIndex(index, direction, node) {
    if (index < 0 || index > this.size) {
      return false;
    }
    if (this.nodes[index] === 0) {
      return false;
    }
    if (direction === 0) {
      // left child
      const leftIndex = index * 2 + 1;
      if (leftIndex >= this.size || this.nodes[leftIndex] !== 0) {
        return false;
      }
      this.nodes[leftIndex] = node;
    }
    if (direction === 1) {
      // right child
      const rightIndex = index * 2 + 2;
      if (rightIndex >= this.size || this.nodes[rightIndex] !== 0) {
        return false;
      }
      this.nodes[rightIndex] = node;
    }
    return true;
  }
  addNode(node) {
    const emptyIndex = this.nodes.findIndex(value => value === 0);
    console.log(emptyIndex, '---empty');
    if (emptyIndex === -1) {
      return false;
    }
    this.nodes[emptyIndex] = node;
    return true;
  }
  deleteNode(index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    if (this.nodes[index] === 0) {
      return false;
    }
    this.nodes[index] = 0;
    return true;
  }
  traverse() {
    // for (let i of this.nodes) {
    console.log(this.nodes);
    // }
  }
}

/*

基于数组的二叉树要点就在于 
左节点的位置为 i*2+1
右节点的位置为i*2+2

  3 5 8 2 6 9 7
           3(0)
     5(1)       8(2)
  2(3)  6(4)  9(5)  7(6)
*/
const tree = new BinaryTree(10, 3);

console.log(tree.addNodeWithIndex(0, 0, createNode(5)));
console.log(tree.addNodeWithIndex(0, 1, createNode(8)));

console.log(tree.addNodeWithIndex(1, 0, createNode(2)));
console.log(tree.addNodeWithIndex(1, 1, createNode(6)));

console.log(tree.addNodeWithIndex(2, 0, createNode(9)));
console.log(tree.addNodeWithIndex(2, 1, createNode(7)));
tree.traverse();

console.log(tree.searchNode(2), '搜索为2的');
console.log('delete value = 2', tree.deleteNode(2));
tree.traverse();
tree.addNode(createNode(8));
tree.traverse();
tree.addNode(createNode(10));
tree.addNode(createNode(11));
tree.addNode(createNode(12));
tree.traverse();
tree.addNode(createNode(13)); // fail
tree.traverse();
