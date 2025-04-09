const leapYears = function(yearToCheck) {
    if(yearToCheck % 100 == 0){
        if(yearToCheck % 400 == 0){ //If its divisible by 100 then it must
            return true;           // also be divisible by 400
        }
            return false;
    }
    else if( yearToCheck % 4 == 0){
        return true;
    }
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
