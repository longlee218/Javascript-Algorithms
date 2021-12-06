const LinkedList = require('../linked-list/LinkedList');

// default size of hash table, the bigger SIZE input, the less collisions we'll get
const SIZE = 20;

module.exports = class HashTable {

    /**
     * 
     * @param {Number} defaultSize 
     */
    constructor(defaultSize = SIZE) {
        // create hash table with size input, and each element is a empty linkedList
        this.buckets = Array(defaultSize).fill(null).map(() => new LinkedList());
        //
        this.keys = {};
    }

    /**
     * 
     * @param {Stirng} key 
     * @returns number
     */
    hash(key) {
        const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => {
            return hashAccumulator + keySymbol.charCodeAt(0);
        }, 0);
        return hash % this.buckets.length;
    }

    /**
     * 
     * @param {String} key 
     * @param {Number} prime 
     * @returns number
     */
    hashPrime(key, prime = 21) {
        const hash = Array.from(key).reduce((hashAccumulator, keySymbol, index, array) => {
            return hashAccumulator + (keySymbol.charCodeAt(0) * Math.pow(prime, array.length - index));
        })
        return hash % this.buckers.length;
    }

    /**
     * 
     * @param {String} key 
     * @param {any} value 
     * @returns Node
     */
    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const myBucket = this.buckets[keyHash];
        const node = myBucket.find({ callback: (v) => v.key === key });
        if (!node) {
            myBucket.append({ key, value });
        } else {
            node.value.value = value;
        }
        return node;
    }

    /**
     * 
     * @param {String} key 
     * @returns Node | null 
     */
    delete(key) {
        const keyHash = this.hash(key);
        delete this.keys[key];
        const myBucket = this.buckets[keyHash];
        const node = myBucket.find({ callback: (v) => v.key === key });
        if (node)
            return myBucket.delete(node.key);
        return null;
    }

    /**
     * 
     * @param {String} key 
     * @returns Node
     */
    get(key) {
        const keyHash = this.hash(key);
        const myBucket = this.buckets[keyHash];
        return myBucket.find({ callback: (v) => v.key === key }) ?? null;
    }

    /**
     * 
     * @param {String} key 
     * @returns boolean
     */
    has(key) {
        return this.keys.hasOwnProperty(key);
    }

    /**
     * 
     * @returns []
     */
    getkeys() {
        return Object.keys(this.keys);
    }

    /**
     * 
     * @returns []
     */
    getValues() {
        return this.buckets.reduce((prev, bucket) => {
            return prev.concat(bucket.toArray().map(node => node.value.value));
        }, []);
    }
}