const Heap = require('./Heap');

module.exports = class HeapMax extends Heap {

    // Override
    orderCondition(value1, value2) {
        return value1 > value2;
    }
}