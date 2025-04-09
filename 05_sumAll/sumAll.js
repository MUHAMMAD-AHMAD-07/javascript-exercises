const sumAll = function(first,last) {

    if(typeof(first)!=typeof(last) || first<0 || last<0 ||
     !Number.isInteger(first) || !Number.isInteger(last)){
        return 'ERROR'
    }
    let loopRunTimes=0;
    if(first>last){
        loopRunTimes = first-last;
    }
    else {
        loopRunTimes = last-first;
    }
    let sum = first;
    for(let i=0;i<loopRunTimes;i++){
        if(last>first){
            first++;
        }
        else{
            first--;
        }
        sum+=first;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
