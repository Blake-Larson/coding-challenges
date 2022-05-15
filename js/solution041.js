// take n and return a list of squared numbers from 0 to n

//P: n , non-negative, whole

//R: return an Arr 2 sqaured by each n from 0 to n

function powersOfTwo(n){
    // declare an array
    let arr = []
    // for loop of math.pow for each n
    for (let i = 0; i <= n; i++){
         //push it to the array
        arr.push(Math.pow(2, i))
    }
   
    //return array
    return arr
}

//E:

powersOfTwo(0) // [2]
powersOfTwo(4) // [1,2,4,8,16]

//Refactored

function powersOfTwo(n){
    let arr = []
    for (let i = 0; i <= n; i++){
        arr.push(Math.pow(2, i))
    }
    return arr
}