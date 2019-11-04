class NodeList {
    constructor(value) {
        this.value = value;
        this.next = undefined;
        this.previous = undefined;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }

    get(index) {
        return this.traverseList(index);
    }

    append(value) {
        this.insert(this.size, value);
    }

    prepend(value) {
        this.insert(0, value);
    }

    insert(index, value) {
        const newNode = new NodeList(value);

        if (index > this.size || index < 0) {
            throw new Error('Out Of Range');
        }

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else if (index === this.size) {
                this.tail.next = newNode;
                newNode.previous = this.tail;
                this.tail = newNode;
            } else {
                const foundNode = this.traverseList(index);
                const previousNode = foundNode.previous;
                newNode.next = foundNode;
                newNode.previous = previousNode;
                foundNode.previous = newNode;
                previousNode.next = newNode;
            }
        }

        this.size++;
    }

    traverseList(index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }

        let currNode = this.head;
        for (let i = 1; i <= index; i++) {
            currNode = currNode.next;
        }

        return currNode;
    }

    remove(index) {
        if (this.size === 0 || index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }
        const nodeToRemove = this.traverseList(index);
        const previousNode = nodeToRemove.previous;
        const nextNode = nodeToRemove.next;
        if (previousNode && nextNode) {
            previousNode.next = nextNode;
            nextNode.previous = previousNode;
        } else if (!previousNode && nextNode) {
            this.head = nextNode;
            nextNode.previous = undefined;
        } else if (!nextNode && previousNode) {
            this.tail = previousNode;
            previousNode.next = undefined;
        } else {
            this.head = this.tail = undefined;
        }

        this.size--;
    }

    printList() {
        const listArray = [];
        let currNode = this.head;
        for (let i = 0; i < this.size; i++) {
            listArray.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(listArray);
        return listArray;
    }
}

function example() {
    let myLinkedList = new DoublyLinkedList();
    myLinkedList.append(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1);
    myLinkedList.insert(2, 99);
    myLinkedList.insert(5, 88);
    myLinkedList.printList();
    myLinkedList.remove(2);
    myLinkedList.printList();
// myLinkedList.reverse()
}

module.exports = DoublyLinkedList;
