const repeatString = function(strPhrase, numTimes) {
    if (numTimes < 0) {
        return "ERROR";
    }
    
    let strMessage = "";
    for (let i = 1; i <= numTimes; i++) {
        strMessage += strPhrase;
    }
    return strMessage;
};

// Do not edit below this line
module.exports = repeatString;
