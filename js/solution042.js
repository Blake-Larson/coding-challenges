// take two integers and return an array of all integers between and including the given integers

//P: two integers, can be negative

//R: return array



function between(a,b){

    let arr = []

    //for loop starting with a and ending with b 
    for(let i = a; i <= b; i++){
        //push all iterations to an array
        arr.push(i)
    }

    return arr
    
}



between(1, 4) // [1,2,3,4]
between(-2, 2) // [-2,-1,0,1,2]

//Refactored

function between(a,b){
    let arr = []
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    return arr
}