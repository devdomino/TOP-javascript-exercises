const removeFromArray = function(arrIn, removeThis) {
 
        const args = Array.from(arguments);
        arrReturn = arrIn.filter(checkElem ,args )        
        return arrReturn;
};

function checkElem(currentItem, ind, arr) {
    return this.indexOf(currentItem) < 0 ;      
}
// Do not edit below this line
module.exports = removeFromArray;
