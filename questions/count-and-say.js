var countAndSay = function(n) {
    let countAndSay = "1";
    for (let i = 2; i <= n; i++) {
        let lastCountAndSay = countAndSay;
        countAndSay = "";
        
        for (let j = 0; j < lastCountAndSay.length;) {
            let char = lastCountAndSay[j];
            let countChar = 0;
            while(lastCountAndSay[j] === char && j < lastCountAndSay.length) {
                countChar++;
                j++;
            }
            
            countAndSay += `${countChar}${char}`;
        }
    }
    
    return countAndSay;
};

countAndSay(30);