const BinaryTreeNode = require('../BinaryTreeNode');

class BinaryTreeNode extends BinaryTreeNode {

    constructor(value) {
        super(value);
    }

    insert(value) {
        if (!this.value) {
            this.value = value;
            return this;
        }
        if (value < this.value) {
            if (!this.left) {
                return this.left.insert(value);
            }
             
        }
    }
}