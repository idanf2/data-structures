class NodeList {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}

class SinglyLinkedList {
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
                this.tail = newNode;
            } else {
                const foundNode = this.traverseList(index);
                const previousNode = this.traverseList(index-1);
                previousNode.next = newNode;
                newNode.next = foundNode;
            }
        }

        this.size++;
    }

    traverseList(index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }

        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        if (this.size === 0 || index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }
        const nodeToRemove = this.traverseList(index);
        const previousNode = (index === 0) ? undefined : this.traverseList(index-1);
        const nextNode = nodeToRemove.next;
        if (previousNode) {
            previousNode.next = nextNode;
        }
        if (!previousNode) {
            this.head = nextNode;
        }
        if (!nextNode) {
            this.tail = previousNode;
        }

        this.size--;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

let myLinkedList = new SinglyLinkedList();
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(5, 88);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
// myLinkedList.reverse()
