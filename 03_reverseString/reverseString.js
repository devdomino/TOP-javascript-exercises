const reverseString = function(strPhrase) {
    if (strPhrase === null) {
        return "";
    }
    let strReversed = "";
    for (let i = strPhrase.length; i > 0; i-- ) {
        console.log(`i is ${i} and letter is ${strPhrase[i-1]}`)
        strReversed += strPhrase[i-1];
    }
    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
