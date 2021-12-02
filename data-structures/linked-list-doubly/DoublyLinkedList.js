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

    delete(value, callback = undefined) {

        if (!this.head) return null;

        if (this.head.value === value) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
                return this;
            }
            this.head = this.head.next;
            this.head.previous = null;
            return this;
        }
        let currNode = this.head.next;
        while (currNode && currNode.value !== value) {
            currNode = currNode.next;
        }
        if (!currNode) {
            return null;
        }
        if (!currNode.next) {
            this.tail = currNode.previous;
            this.tail.next = null;
            return this;
        }
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        return this;
    }

    deleteTail() {
        if (!this.head) {
            return null;
        }
        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        }
        this.tail = this.tail.previous;
        this.tail.next = null;
        return this;
    }

    find(value, callback) {
        if (!this.head) {
            return null;
        }
        let currNode = this.head;
        while (currNode) {
            if (callback && callback(currNode.value)) {
                return currNode;
            }
            if (value && currNode.value === value) {
                return currNode;
            }
            currNode = currNode.next;
        }
        return null;
    }


    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            prevNode = currNode.previous;

            currNode.next = prevNode;
            currNode.previous = nextNode;

            prevNode = currNode;
            currNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }

    * generator() {
        let currNode = this.head;
        while (currNode) {
            yield currNode;
            currNode = currNode.next;
        }
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next;
        this.head.previous = null;
        return this;
    }

    toArray() {
        if (!this.head) {
            return [];
        }
        let currNode = this.head;
        const result = [];
        while (currNode) {
            result.push(currNode);
            currNode = currNode.next;
        }
        return result;
    }

    toString(callback = undefined) {
        return this.toArray().map(node => node.toString(callback)).join('\n');
    }
}

module.exports = DoublyLinkedList;