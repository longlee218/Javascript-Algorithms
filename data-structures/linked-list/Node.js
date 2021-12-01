class LinkedList {
    constructor(value, next = null) {
        if (!value) {
            throw new Error("Invalid value");
        }
        this.value = value;
        this.next = next;
    }

    toString(callback = undefined) {
        return callback ? callback(this.value) : `Node value: ${this.value}`;
    }
}

module.exports = LinkedList;