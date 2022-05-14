
// Take a list of numbers, return new list, values ++

//P: numbers, an array.  yes negative, whole num, no empty arr.

//R: Return new arr that increment by 1 from lowest to highest


function pipeFix(numbers){
    //get min and max numbers from numbersArr
    lowest = Math.min(...numbers)
    highest = Math.max(...numbers)

    console.log(lowest,highest)
    //new array should count from min to max by 1
    newArr = []
    for(let i = lowest; i <= highest; i++){
        newArr.push(i)
    }

    //return new array
    return newArr
}



//E: 
pipeFix([1,2,4,5]) // [1,2,3,4,5]
pipeFix([-5,-4,-3,1,4,6]) // [-5,-4,-3,-2,-1,0,1,2,3,4,5,6]

//Refactored

function pipeFix(numbers){
    lowest = Math.min(...numbers)
    highest = Math.max(...numbers)

    newArr = []
    for(let i = lowest; i <= highest; i++){
        newArr.push(i)
    }
    return newArr
}