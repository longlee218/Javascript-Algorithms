const DoublyLinkedList = require('../DoublyLinkedList');
const console = require('console');

const log = console.log;

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.append(4);
doublyLinkedList.append(5);

log(doublyLinkedList.toString());

log('\n------DELETE---------\n');
log(doublyLinkedList.delete(1).toString());

log('\n------GENERATOR---------\n');
const iterators = doublyLinkedList.generator();
log(iterators.next().value.toString());
log(iterators.next().value.toString());
log(iterators.next().value.toString());
log(iterators.next().value.toString());

log('\n------REVERSE---------\n');
log(doublyLinkedList.reverse().toString());