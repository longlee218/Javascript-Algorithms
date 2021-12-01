class DoublyNode {
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    toString(callback = undefined) {
        return callback ? callback(this.value) : `Node value: ${this.value}`;
    }
}

module.exports = DoublyNode;