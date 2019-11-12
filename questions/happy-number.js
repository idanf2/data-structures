/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let sum = 0;
    let curr = n;
    while (true) {
        let currArr = curr.toString().split('').map(Number);

        for (let i = 0; i < currArr.length; i++) {
            sum += Math.pow(currArr[i], 2);
        }

        if (sum === 1) {
            return true;
        } else if (n === sum) {
            return false;
        } else {
            curr = sum;
            sum = 0;
        }
    }

    return false;
};


isHappy(19)