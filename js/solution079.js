// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


// function highAndLow(numbers){
//     //split string
//     let stringArr = numbers.split(' ')

//     //take array and sort

//     let stringArrSorted = stringArr.sort((a, b) => a - b)

//     //take first and last of array join those and return

//     let resultArr = []

//     resultArr.push(stringArrSorted[stringArrSorted.length - 1], stringArrSorted[0])

//     let result = resultArr.join(' ')

//     console.log(result)
//     return result
//   }

// Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"


// function highAndLow(numbers){
//     let stringArr = numbers.split(' ')
//     let result = []
//     result.push(Math.max(...stringArr), Math.min(...stringArr))
//     console.log(result.join(' '))
//     return result.join(' ')
//   }


  function highAndLow(numbers){
    numbersArr = numbers.split(' ');
    return `${Math.max(...numbersArr)} ${Math.min(...numbersArr)}`;
  }