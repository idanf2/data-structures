// function reverseWords(str) {
//     let wordsArray = str.split(' ');
//     let reversedWordsArray = [];
//     for(let word of wordsArray) {
//         reversedWordsArray.push(reverse(word));
//     }

//     return reversedWordsArray.join(' ');
// }

// function reverse(str) {
//     let reversedStr = '';

//     for(let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }

//     return reversedStr;
// }

function reverseWords(str) {
    let firstWordIndex = 0;
    let currIndex = 0;

    while (currIndex < str.length) {
        if ((firstWordIndex !== currIndex && str[currIndex] === ' ') ||
            (firstWordIndex !== currIndex && str[currIndex] !== ' ' && (currIndex + 1) === str.length)) {
            reverse(str, firstWordIndex, currIndex - 1);
            firstWordIndex = ++currIndex;
        } else if (firstWordIndex === currIndex && str[currIndex] === ' ') {
            firstWordIndex++;
            currIndex++;
        } else {
            currIndex++;
        }
    }

    return str;
}

function reverse(str, first, last) {
    let size = last - first + 1;
    for (let i = 0; i <= size / 2; i++) {
        let temp = str[first + i];
        str[first + 1] = str[first + size - i];
        str[first + size - i] = temp;
    }
}
reverseWords('Idan Hello Bye');