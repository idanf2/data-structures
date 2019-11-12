var Item = /** @class */ (function () {
    function Item(value) {
        this.value = value;
        this.next = undefined;
    }
    return Item;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.size = 0;
        this.head = this.tail = undefined;
    }
    LinkedList.prototype.append = function (value) {
        var newItem = new Item(value);
        if (this.size === 0) {
            this.head = this.tail = newItem;
        }
        else {
            this.tail.next = newItem;
            this.tail = newItem;
        }
        this.size++;
    };
    LinkedList.prototype.prepend = function (value) {
        var newItem = new Item(value);
        if (this.size === 0) {
            this.head = this.tail = newItem;
        }
        else {
            newItem.next = this.head;
            this.head = newItem;
        }
        this.size++;
    };
    LinkedList.prototype.insert = function (index, value) {
        var newNode = new Item(value);
        if (index > this.size || index < 0) {
            throw new Error('Out Of Range');
        }
        if (this.size === 0) {
            this.head = this.tail = newNode;
        }
        else {
            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else if (index === this.size) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            else {
                var foundNode = this.traverseList(index);
                var previousNode = this.traverseList(index - 1);
                previousNode.next = newNode;
                newNode.next = foundNode;
            }
        }
        this.size++;
    };
    LinkedList.prototype.traverseList = function (index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }
        var counter = 0;
        var currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };
    LinkedList.prototype.count = function () {
        return this.size;
    };
    LinkedList.prototype.remove = function (index) {
        if (this.size === 0 || index > this.size - 1 || index < 0) {
            throw new Error('Out Of Range');
        }
        var nodeToRemove = this.traverseList(index);
        var previousNode = (index === 0) ? undefined : this.traverseList(index - 1);
        var nextNode = nodeToRemove.next;
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
    };
    LinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    };
    return LinkedList;
}());
function example() {
    var myLinkedList = new LinkedList();
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
//# sourceMappingURL=singly-linked-list.js.map