// two integers returns remainder of the larger divided by the smaller

//P: two integers, whole numbers, could be negative

//R: number

function remainder(n, m){
    // handle same parameters
    if(n === m && n !== 0){
        return 0
    } else {
        // find out which is larger
        let larger = n > m ? n : m
        let smaller = n < m ? n : m
        // handle div by 0
        if(smaller === 0){
            return NaN
        } else {
            //return remainder
            return larger % smaller
        }
    }
}

//E:

remainder(5, 2) // 1
remainder(3, 12)// 0


//Refactored

function remainder(n, m){
    if(n === m && n !== 0){
        return 0
    } else {
        let larger = n > m ? n : m
        let smaller = n < m ? n : m
        return smaller === 0 ? NaN : larger % smaller
    }
}