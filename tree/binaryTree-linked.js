class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 普通二叉树的插入 保证整个二叉树是平衡的
class BinaryTree {
  constructor(rootNode) {
    this.root = rootNode;
    this.insertNum = 0;
    this.quene = []; // 记录每一个root
  }
  addNode(node) {
    this.insertNum++;
    if (!this.root) {
      this.root = node;
      this.quene.push(this.root);
    } else {
      const parent = this.quene[0];
      if (!(this.insertNum % 2)) {
        parent.left = node;
        this.quene.push(parent.left);
      } else {
        parent.right = node;
        this.quene.push(parent.right);
        this.quene.shift(); // 当前的root节点插入满了，出列
      }
    }
  }
  toString() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}
const tree = new BinaryTree();

tree.addNode(new Node(1));
tree.addNode(new Node(2));
tree.addNode(new Node(3));
tree.addNode(new Node(4));
tree.addNode(new Node(5));
tree.addNode(new Node(6));
tree.toString();
