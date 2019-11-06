class Stack {
    constructor(){
        this.data = []
    }
    peek() {
        if(this.data.length > 0) {
            return this.data[this.data.length - 1];
        }
        return undefined;
    }
    push(value){
        return this.data.push(value);
    }
    pop(){
        return this.data.pop();
    }
    isEmpty() {
        return this.data.length === 0;
    }
}

function example() {
    const myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    console.log(myStack.peek());
    myStack.pop();
    console.log(myStack.peek());
    console.log(myStack.isEmpty());
    console.log(myStack.pop());
    console.log(myStack.pop());
    console.log(myStack.isEmpty());
}

