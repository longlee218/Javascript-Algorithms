const LinkedList = require('../linked-list/LinkedList');

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    isEmpty() {
        return this.queue.head === null;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.queue.head.toString();
    }

    enqueue(value) {
        this.queue.append(value);
        return this;
    }

    dequque() {
        if (this.isEmpty()) return null;
        this.queue.deleteHead();
        return this;
    }

    toString() {
        return this.queue.toString();
    }

}

module.exports = Queue;