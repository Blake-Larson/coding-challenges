// test whether or not the factor is factor of base.

//P: base, factor both nums, won't be negative

//R: return true or false

function checkForFactor(base,factor){

    return base % factor === 0

    //if base mod factor

    //no remainder - return true
}


//E:
checkForFactor(10,2) // true
checkForFactor(63,7) // true
checkForFactor(9, 2) //false