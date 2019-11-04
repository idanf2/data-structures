const DoublyLinkedList = require("./doubly-linked-list");

class Queue {
    constructor() {
        this.data = new DoublyLinkedList();
    }

    peek() {
        return this.data.tail ? this.data.tail.value : undefined;
    }

    enqueue(value) {
        this.data.prepend(value);
    }

    dequeue() {
        return this.data.remove(this.data.size - 1);
    }

    isEmpty() {
        return this.data.size === 0;
    }
}

function example() {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    console.log(myQueue.dequeue());
    console.log(myQueue.isEmpty());
    console.log(myQueue.dequeue());
    console.log(myQueue.dequeue());
    console.log(myQueue.isEmpty());
}

example();
