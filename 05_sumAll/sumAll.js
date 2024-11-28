const sumAll = function(start, end) {
    
    if (typeof(start) === "string" || typeof(end) === "string") {
        return "ERROR";
    }

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    if (Number.isNaN(start) || Number.isNaN(end)) {
        return "ERROR";
    }

    if (start < 0 || end < 0) {
        return "ERROR";
    }
    
    let oldEnd = end;
    if (start > end) {
    
        end = start;
        start = oldEnd;
    }

let total = start;
let nextNum = start
for (let i = start; i < end; i++) {
    nextNum += 1;
    total += nextNum;
    }
console.log(total)
return total;
    };

// Do not edit below this line
module.exports = sumAll;
