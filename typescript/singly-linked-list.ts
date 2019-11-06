class Item<T> {
    value: T;
    next: Item<T>;

    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}

class LinkedList<T> {
    private size: number;
    private head: Item<T>;
    private tail: Item<T>;

    constructor() {
        this.size = 0;
        this.head = this.tail = undefined;
    }

    append(value: T): void {
        let newItem: Item<T> = new Item(value);
        if (this.size === 0) {
            this.head = this.tail = newItem;
        } else {
            this.tail.next = newItem;
            this.tail = newItem;
        }

        this.size++;
    }

    prepend(value: T): void {
        let newItem: Item<T> = new Item(value);
        if (this.size === 0) {
            this.head = this.tail = newItem;
        } else {
            newItem.next = this.head;
            this.head = newItem;
        }

        this.size++;
    }

    insert(index: number, value: T): void {
        const newNode: Item<T> = new Item<T>(value);

        if (index > this.size || index < 0) {
            throw new Error('Out Of Range');
        }

        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else if (index === this.size) {
                this.tail.next = newNode;
                this.tail = newNode;
            } else {
                const foundNode: Item<T> = this.traverseList(index);
                const previousNode: Item<T> = this.traverseList(index - 1);
                previousNode.next = newNode;
                newNode.next = foundNode;
            }
        }

        this.size++;
    }

    traverseList(index): Item<T> {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }

        let counter: number = 0;
        let currentNode: Item<T> = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    count(): number {
        return this.size;
    }

    remove(index): Item<T> {
        if (this.size === 0 || index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }
        const nodeToRemove = this.traverseList(index);
        const previousNode = (index === 0) ? undefined : this.traverseList(index - 1);
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

        return nodeToRemove;
    }

    printList(): T[] {
        const array: T[] = [];
        let currentNode: Item<T> = this.head;

        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}

function example() {
    let myLinkedList = new LinkedList<number>();
    myLinkedList.append(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1);
    console.log(myLinkedList.printList());
    myLinkedList.insert(2, 99);
    myLinkedList.insert(5, 88);
    console.log(myLinkedList.printList());
    myLinkedList.remove(2);
    console.log(myLinkedList.printList());
    myLinkedList.remove(0);
    console.log(myLinkedList.printList());
    myLinkedList.remove(3);
    console.log(myLinkedList.printList());
// myLinkedList.reverse()
}

example();
