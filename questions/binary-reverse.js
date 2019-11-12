var reverseBits = function (n) {
    let nAsString = n.toString(2);
    let reversedString = nAsString.split('').reverse().join('');
    return parseInt(reversedString, 2);
};

reverseBits(43261596);