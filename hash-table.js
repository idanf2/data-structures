const DoublyLinkedList =  require("./doubly-linked-list");

class HashTable {
    constructor(size = 50) {
        this.data = [];
        this.size = size;
    }

    set(key, value) {
        key = key.toString();
        const hash = this._hash(key);
        if (!this.data[hash]) {
            this.data[hash] = new DoublyLinkedList();
            this.data[hash].append({key, value});
        } else {
            let currNode = this.data[hash].head;
            while (currNode && currNode.value.key !== key) {
                if (currNode.value.key === key) {
                    break;
                }

                currNode = currNode.next;
            }

            if (currNode) {
                currNode.value.value = value;
            } else {
                this.data[hash].append({key, value});
            }
        }
    }

    get(key) {
        key = key.toString();
        const hash = this._hash(key);
        if (this.data[hash]) {
            let currNode = this.data[hash].head;
            while (currNode) {
                if (currNode.value.key === key) {
                    return currNode.value.value;
                }

                currNode = currNode.next;
            }
        }

        return undefined;
    }

    remove(key) {
        key = key.toString();
        const hash = this._hash(key);
        if (this.data[hash]) {
            let currNode = this.data[hash].head;
            let index = 0;
            while (currNode) {
                if (currNode.value.key === key) {
                    break;
                }

                currNode = currNode.next;
                index++;
            }

            if (currNode) {
                this.data[hash].remove(index);
            }
        }
    }

    _hash(key) {
        key = key.toString();
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('grapes', 1);
console.log(myHashTable.get('grapes'));
myHashTable.remove('grapes');
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples'));
