// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
getSum(1, 0) //--> 1 (1 + 0 = 1)
getSum(1, 2) //--> 3 (1 + 2 = 3)
getSum(0, 1) //--> 1 (0 + 1 = 1)
getSum(1, 1) //--> 1 (1 since both are same)
getSum(-1, 0) //--> -1 (-1 + 0 = -1)
getSum(-1, 2) //--> 2 (-1 + 0 + 1 + 2 = 2)



function getSum( a,b ){
    if (a === b){
        return a
    } else {
        let sum = 0
        for( let i = Math.min(a, b); i <= Math.max(a, b); i++){
            sum += i
        }
        return sum
    }
}