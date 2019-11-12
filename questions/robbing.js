var rob = function (nums) {
    //     let solution = [];
    //     solution[0] = nums[0];
    //     solution[1] = nums[1];
    //     for(let i=2; i< nums.length; i++) {
    //         solution[i] = solution[i-2] + nums[i];
    //     }

    //     return Math.max(solution[nums.length-1], solution[nums.length-2]);
};

var robbing = function (nums, i) {
    if (i > nums.length - 1) { return 0; }
    if (i === nums.length - 1) { return nums[nums.length - 1]; }

    return Math.max(nums[i] + robbing(nums, i + 2), nums[i + 1] + robbing(nums, i + 3));
}


rob([1, 2, 3, 4]);