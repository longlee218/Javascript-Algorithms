const DoublyNode = require('./DoublyNode');

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const node = new DoublyNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
        return this;
    }

    append(value) {
        const node = new DoublyNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
        return this;
    }
}