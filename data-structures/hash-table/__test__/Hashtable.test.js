const HashTable = require('../HashTable');

const hashtable = new HashTable();

hashtable.set('longdz', function () {
    console.log("hello");
});

hashtable.set('longdz2', function () {
    console.log("hello2");
});
console.log(hashtable.buckets);