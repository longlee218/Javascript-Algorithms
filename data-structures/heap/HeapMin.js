const Heap = require('./Heap');

module.exports = class HeapMin extends Heap {

    // Override
    orderCondition(value1, value2) {
        return value1 < value2;
    }
}