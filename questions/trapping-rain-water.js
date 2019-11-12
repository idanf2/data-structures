/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let leftPeak = [0];
    let rightPeak = [];
    rightPeak[height.length - 1] = 0;
    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] > leftPeak[i - 1]) {
            leftPeak[i] = height[i - 1];
        } else {
            leftPeak[i] = leftPeak[i - 1];
        }
    }

    for (let i = height.length - 2; i >= 0; i--) {
        if (height[i + 1] > rightPeak[i + 1]) {
            rightPeak[i] = height[i + 1];
        } else {
            rightPeak[i] = rightPeak[i + 1];
        }
    }

    let result = 0;
    for (let i = 0; i < height.length; i++) {
        let currHeight = Math.min(leftPeak[i], rightPeak[i]) - height[i];
        if (currHeight > 0) {
            result += currHeight;
        }
    }

    return result;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);