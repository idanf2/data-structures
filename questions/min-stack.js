/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.data = [];
    this.mindata = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.data.push(x);
    if (this.mindata.length === 0 || x <= this.mindata[this.mindata.length - 1]) {
        this.mindata.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.mindata[this.mindata.length - 1] === this.data[this.data.length - 1]) {
        this.mindata.pop();
    }

    this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.mindata[this.mindata.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());  