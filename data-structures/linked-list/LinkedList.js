const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        if (!this.tail) {
            this.tail = node;
            return this;
        }
        this.head = node;
        return this;
    }

    find(value, callback = undefined) {
        let currNode = this.head;
        while (currNode) {
            if (callback && callback.call(currNode.value)) {
                return currNode;
            }
            if (value && currNode.value === value) {
                return currNode;
            }
            currNode = currNode.next;
        }
        return null;
    }

    deleteHead() {
        if (!this.head) {
            return 0;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        this.head = this.head.next;
        return 1;
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        let currNode = this.head;
        while (currNode.next.next) {
            currNode = currNode.next;
        }
        currNode.next = null;
        this.tail = currNode;
    }

    toArray() {
        const array = [];
        let currNode = this.head;
        while (currNode) {
            array.push(currNode);
            currNode = currNode.next;
        }
        return array;
    }

    reverse() {
        let currNode = this.head;
        if (!currNode) {
            return null;
        }

        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.head.next = null;
        this.tail = this.head;
        this.head =  prevNode;
        return this;
    }

    toString(callback = undefined) {
        return this.toArray().map(node => node.toString(callback)).join('\n');
    }
}

module.exports = LinkedList;