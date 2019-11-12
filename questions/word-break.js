/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let clonedS = s.repeat(1);

    for (let word of wordDict) {
        let index = clonedS.indexOf(word);
        if (index !== -1) {
            let re = new RegExp(word, "g");
            clonedS = clonedS.replace(re, '');
        }
    }

    return clonedS.length === 0;
};

wordBreak("leetcode", ["leet", "code"]);