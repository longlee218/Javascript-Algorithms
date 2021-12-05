const Queue = require('../Queue');
const log = console.log;

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

log(queue.toString());
queue.dequque();
log('-----------------------');
log(queue.toString());