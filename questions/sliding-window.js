/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let maxCount = 0;
//     for(let i = 0; i < s.length; i++) {
//     let wordSet = new Set();
//         let count = 0;
//         for(let  j = i; j < s.length; j++) {
//             if(!wordSet.has(s[j])) {
//                 wordSet.add(s[j]);
//                 count++
//             } else break;
//         }

//     if(count > maxCount) {maxCount = count;}
//     }

// return maxCount;
// };

var lengthOfLongestSubstring = function (s) {
    let first = 0;
    let end = 0;
    let size = s.length;
    let ans = 0;

    let set = new Set();
    while (first < size && end < size) {
        if (!set.has(s[end])) {
            set.add(s[end++]);
            ans = Math.max(ans, end - first);
        } else {
            set.delete(s[first++]);
        }
    }
    return ans;
};