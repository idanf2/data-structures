/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    sHash = {};
    tHash = {};
    for (let i = 0; i < s.length; i++) {
        sHash[s[i]] = sHash[s[i]] ? ++sHash[s[i]] : 1;
    }

    for (let i = 0; i < t.length; i++) {
        tHash[t[i]] = tHash[t[i]] ? ++tHash[t[i]] : 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (sHash[s[i]] !== tHash[s[i]]) {
            return false;
        }
    }


    for (let i = 0; i < s.length; i++) {
        if (sHash[t[i]] !== tHash[t[i]]) {
            return false;
        }
    }

    return true;
};

isAnagram("anagram", "nagaram");