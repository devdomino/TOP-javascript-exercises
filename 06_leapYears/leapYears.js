const leapYears = function(year) {
    const checkYear = Number(year);
   
    if (Number.isNaN(checkYear)) {
        return 'ERROR';
    }

    if (checkYear%100 === 0 && checkYear%400 ===0) {
        return true;
      } 

    if (checkYear%4 === 0) {
        if (checkYear%100 === 0 && checkYear%400 !== 0) {
            return false;
        }
         return true;
    }
return false;

};

// Do not edit below this line
module.exports = leapYears;
