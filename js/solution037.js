//PREP

// # of duty free bottles needed to pay for our holiday

//P: normPrice, discount, hol

//R: the number of bottles needed to pay for our holiday, integer



function dutyFree(normPrice, discount, hol){
    //get amount saved
    amountSaved = normPrice * (discount * .01)
    //return cost of holiday divided by amount saved
    return Math.floor(hol / amountSaved)
}



//Examples
dutyFree(10, 10, 500) // 500
dutyFree(20, 30, 1000) // 100


//Refactored
function dutyFree(normPrice, discount, hol){
    return(Math.floor(hol / normPrice / discount * 100))
  }