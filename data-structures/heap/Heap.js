module.exports = class Heap {

    constructor() {
        this.heapContainer = [];
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 2) / 2);
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heapContainer.length
    };

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heapContainer.length
    };

    getLeftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)]
    };

    getRightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)]
    };

    getParent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)]
    };

    swap(index1, index2) {
        const temp = this.heapcontainer[index1];
        this.heapContainer[index1] = this.heapcontainer[index2];
        this.heapContainer[index2] = temp;
    }

    peek() {
        if (this.heapContainer.length === 0) {
            throw new Error("No heap");
        }
        return this.heapContainer[0];
    }

    poll() {
        if (this.heapContainer.length === 0) {
            throw new Error("No heap");
        }
        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }
        const root = this.heapContainer[0];
        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(index) {
        while (hasLeftChild(index)) {
            let smallerIndex = this.getLeftChildIndex(index);
            // this.getRightChild(index) < this.heapContainer[smallerIndex]
            if (this.hashRightChild(index) && this.orderCondition(this.getRightChild(index), this.heapContainer[smallerIndex])) {
                smallerIndex = this.getRightChildIndex(index);
            }
            // this.heapContainer[smallerIndex] < this.heapContainer[index]
            if (this.orderCondition(this.heapContainer[smallerIndex], this.heapContainer[index])) {
                this.swap(index, smallerIndex);
            }
            index = smallerIndex;
        }
    }

    add(value) {
        this.heapContainer.push(value);
        this.heapifyUp(this.headContainer.length - 1);
        return this;
    }

    heapifyUp(index) {
        // this.getParent(index) < this.heapContainer[index]
        while (this.hasParent(index) && this.orderCondition(this.getParent(index), this.heapContainer[index])) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    find(value) {
        return this.heapContainer.filter((item, index) => {
            if (item === value)
                return index;
            return false;
        })
    }

    remove(value) {
        if (this.heapContainer.length === 0) {
            return null;
        }
        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }

        const arrIndexRemove = this.find(value);
        const lengthIndexRemove = arrIndexRemove.length;

        for (let i = 0; i < lengthIndexRemove; i++) {
            const indexRemove = arrIndexRemove.pop();

            if (indexRemove === this.heapContainer.length - 1) {
                this.heapContainer.pop();
            } else {
                this.heapContainer[indexRemove] = this.heapContainer.pop();
                if (this.hasLeftChild(indexRemove) && this.orderCondition(this.getParent(indexRemove), this.heapContainer[indexRemove])) {
                    this.heapifyDown(indexRemove);
                } else {
                    this.heapifyUp(indexRemove);
                }
            }
        }
    }

    orderCondition() {
        return false;
    }
}