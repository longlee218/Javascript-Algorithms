const LinkedList = require('../linked-list/LinkedList');

// default size of hash table, the bigger SIZE input, the less collisions we'll get
const SIZE = 20;

module.exports = class HashTable {
    /**
     * @param {Integer} defaultSize 
     */
    constructor(defaultSize = SIZE) {
        // create hash table with size input, and each element is a empty linkedList
        this.buckers = new Array(defaultSize).fill(null).map(() => new LinkedList());
        //
        this.keys = {};
    }

    /**
     * 
     * @param {String} key 
     */
    hash(key) {
        
    }
}