var searchText = function (text, str) {
    let indexesFound = [];

    let currIndex = 0;
    while (currIndex < text.length) {
        if (text[currIndex] === str[0]) {
            let isCorrectWord = true;
            let startWordIndex = currIndex;
            currIndex++;
            for (let j = 1; j < str.length && isCorrectWord; j++) {
                if (str[j] !== text[currIndex]) {
                    isCorrectWord = false;
                } else {
                    currIndex++;
                }
            }
            if (isCorrectWord) {
                indexesFound.push(startWordIndex);
            }
        } else { currIndex++ }
    }

    return indexesFound.length > 0 ? indexesFound : -1;
}

searchText('AABAACAADAABAABA', 'AABA');