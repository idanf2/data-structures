var longestCommonPrefix = function (strs) {
    let longestPrefix = '';
    let minLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < minLength; i++) {
        // for(let j = 0; j < strs.length; j++) {
        //     if (strs[j][i])
        // }
        if (strs.map(str => str[i]).every(character => character === strs[0][i])) {
            longestPrefix += strs[0][i];
        } else {
            return longestPrefix;
        }
    }

    return longestPrefix;
};

longestCommonPrefix(["flower", "flow", "flight"])