module.exports = class BinaryTreeNode {

    constructor(value = null) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    get leftHeight() {
        if (!this.left) {
            return 0;
        }
        return this.left.height + 1;
    }

    get rightHeight() {
        if (!this.right) {
            return 0;
        }
        return this.right.height + 1;
    }

    get height() {
        return Math.max(this.right.height, this.left.height);
    }

    setValue(value) {
        this.value = value;
        return this;
    }

    get value() {
        return this.value;
    }

    travers() {
        let nodes = [];

        if (this.left) {
            nodes = nodes.concat(this.left.travers());
        }

        nodes.push(this.value);

        if (this.right) {
            nodes = nodes.concat(this.right.travers());
        }

        return nodes;
    }

    toString() {
        return this.travers().toString();
    }

}