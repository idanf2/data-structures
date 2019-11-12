var rotate = function (nums, k) {
    k = k % nums.length;
    let lastArrayItems = nums.slice(0, nums.length - k);
    let firstArrayItems = nums.slice(nums.length - k, nums.length);
    return firstArrayItems.concat(lastArrayItems);
};

rotate([1, 2, 3, 4, 5, 6, 7], 2);