// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

XO("ooxx") // => true
 XO("xooxx")// => false
 XO("ooxXm")// => true
XO("zpzpzpp")// => true // when no 'x' and 'o' is present should return true
 XO("zzoo")// => false

function XO(str){

    strArr = str.toLowerCase().split('')
    let xArr = strArr.filter(el => el === 'x')
    let oArr = strArr.filter(el => el === 'o')
    
    if(xArr.length === 0 && oArr.length === 0){
        console.log(true, 'blank')
        return true
    } else if (xArr.length === oArr.length){
        console.log(true, 'same length')
        return true
    } else {
        console.log(false)
        return false
    }
}