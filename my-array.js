class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length++] = item;
        return this.data;
    }

    pop() {
        if(this.length > 0) {
            let lastItem =  this.data[this.length - 1];
            delete this.data[this.length - 1];
            this.length--;

            return lastItem;
        }
    }

    deleteAtIndex(index) {
        if (this.length > 0 && index < this.length && index >= 0) {
            let item = this.data[index];
            for(let i = index + 1; i < this.length; i++) {
                this.data[i - 1] = this.get(i);
            }

            this.pop();

            return item;
        }
    }

}

const myArray = new MyArray();
console.log(myArray.push('hi'));
console.log(myArray.push('you'));
console.log(myArray.push('!'));
console.log(myArray.pop());
console.log(myArray.deleteAtIndex(0));
console.log(myArray.push('are'));
console.log(myArray.push('nice'));
console.log(myArray);
