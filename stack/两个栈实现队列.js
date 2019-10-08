class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  put(element) {
    this.stack1.push(element);
  }

  pop() {
    if (this.stack2.length) {
      return this.stack2.pop();
    }
    while (this.stack1.length) {
      const el = this.stack1.pop();
      this.stack2.push(el);
    }

    if (!this.stack2.length) {
      return '空';
    } else {
      return this.stack2.pop();
    }
  }
}

var a = new Queue();
console.log(a.pop());
a.put(1);
a.put(2);
a.put(3);
console.log(a.stack1);
console.log(a.pop());
a.put(4);
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
