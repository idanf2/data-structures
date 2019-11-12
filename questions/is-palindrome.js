var isPalindrome = function (s) {
    let newstr = s.replace(/[ \,\.]/g, '');

    let right = newstr.length - 1;
    let left = 0;
    while (left < right) {
        if (newstr[left].toLowerCase() !== newstr[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

isPalindrome("A man, a plan, a canal: Panama")