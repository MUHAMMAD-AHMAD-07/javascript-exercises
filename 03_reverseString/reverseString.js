const reverseString = function(myString) {
    let size= myString.length;
    let reverseString= '';

    for(let i= size-1;i>-1;i--){
        reverseString=reverseString+myString[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
