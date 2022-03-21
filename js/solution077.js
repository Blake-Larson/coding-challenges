// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function zero(op) {
    if(!op){
        return 0
    } else {
        return calculate(op, 0)
    }
}
function one(op) {
    if(!op){
        return 1
    } else {
        return calculate(op, 1)
    }
}
function two(op) {
   if(!op){
        return 2
    } else {
        return calculate(op, 2)
    }
}
function three(op) {
    if(!op){
        return 3
    } else {
        return calculate(op, 3)
    }
}
function four(op) {
    if(!op){
        return 4
    } else {
        return calculate(op, 4)
    }
}
function five(op) {
    if(!op){
        return 5
    } else {
        return calculate(op, 5)
    }
}
function six(op) {
    if(!op){
        return 6
    } else {
        return calculate(op, 6)
    }
}
function seven(op) {
    if(!op){
        return 7
    } else {
        return calculate(op, 7)
    }
}
function eight(op) {
    if(!op){
        return 8
    } else {
        return calculate(op, 8)
    }
}
function nine(op) {
    if(!op){
        return 9
    } else {
        return calculate(op, 9)
    }
}

function plus(num) {
    return `plus, ${num}`
}
function minus(num) {
    return `minus, ${num}`
}
function times(num) {
    return `times, ${num}`
}
function dividedBy(num) {
    return `dividedBy, ${num}`
}

function calculate(str, num){
    let strArr = str.split(',')
    if(strArr[0] === 'plus'){
        return num + Number(strArr[1])
    } else if(strArr[0] === 'minus'){
        return num - Number(strArr[1])
    } else if(strArr[0] === 'times'){
        return num * Number(strArr[1])
    } else if(strArr[0] === 'dividedBy') {
        return Math.floor(num / Number(strArr[1]))
    }
}


seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3