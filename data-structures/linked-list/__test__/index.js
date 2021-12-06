const LinkedList = require('../LinkedList');

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log(linkedList.toString());
linkedList.delete(4);
console.log('------------------------');
console.log(linkedList.toString());