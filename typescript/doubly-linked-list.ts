class ListNode<T> {
    value: T;
    next: ListNode<T>;
    previous: ListNode<T>;

    constructor(value: T) {
        this.value = value;
        this.next = undefined;
        this.previous = undefined;
    }
}

class List<T> {
    private size: number;
    private head: ListNode<T>;
    private tail: ListNode<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }

    getNode(index: number):  ListNode<T>{
        return this.traverseList(index);
    }

    append(value: T): void {
        this.insert(this.size, value);
    }

    prepend(value: T): void {
        this.insert(0, value);
    }

    insert(index: number, value: T) {
        const newNode = new ListNode(value);

        if (index > this.size || index < 0) {
            throw new Error('Out Of Range');
        }

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (index === 0) {
                newNode.next = this.head;
                this.head.previous = newNode;
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

    private traverseList(index: number): ListNode<T> {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }

        if(index === this.size - 1) {
            return this.tail;
        }

        let currNode: ListNode<T> = this.head;
        for (let i = 1; i <= index; i++) {
            currNode = currNode.next;
        }

        return currNode;
    }

    remove(index: number): T {
        if (this.size === 0 || index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }
        const nodeToRemove: ListNode<T> = this.traverseList(index);
        const previousNode: ListNode<T> = nodeToRemove.previous;
        const nextNode: ListNode<T> = nodeToRemove.next;

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
        return nodeToRemove.value;
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
