const LinkedList = require('../linked-list/LinkedList');

class Stack {
    constructor() {
        this.queue = new LinkedList();
    }

    isEmpty() {
        return this.queue.head === null;
    }

    push(value) {
        this.queue.append(value);
    }

    pop() {
        if (this.isEmpty()) 
            return null;
        return this.queue.deleteTail();
    }

    toString() {
        return this.queue.toString();
    }

}

module.exports = Stack;