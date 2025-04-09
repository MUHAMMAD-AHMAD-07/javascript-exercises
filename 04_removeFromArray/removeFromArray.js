const removeFromArray = function(originalArray, ...elementsToRemove) {


    let removeElementsSize = elementsToRemove.length;

    for(let i=0; i<removeElementsSize; i++){
        for(let j= 0; j<originalArray.length; j++){
            if(elementsToRemove[i] === originalArray[j]){
                originalArray.splice(j,1);
                j--; //Array.splice reduces the size every time it is called
                    // so we may skip any element if we dont decrement j by 1
                    // as j will be '1' step forward.
            }
        }
    }
    return originalArray;
};
// Do not edit below this line
module.exports = removeFromArray;
