const repeatString = function(myString,repeatTimes) {

    if(repeatTimes<0){
        return 'ERROR';
    }
    
    let finalString = '';
    for(let i=0;i<repeatTimes;i++){
        finalString = finalString + myString;
    }
    return finalString;
};



// Do not edit below this line
module.exports = repeatString;
