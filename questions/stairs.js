var climbStairs = function (n) {
    return stairs(n, 0, {});
};

var stairs = function (n, i, cache) {
    if (n - 1 === i) return 1;
    else if (n <= i) return 0;

    if (cache[i]) return cache[i];

    cache[i] = stairs(n, i + 2, cache) + stairs(n, i + 1, cache);
    return cache[i];
}

climbStairs(4);