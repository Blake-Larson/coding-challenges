// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number){
    let string = ''
    for(let i = 1; i <= 10; i++){
        string += `${i} * ${number} = ${i * number} \n`
    }
    // string += `1 * ${number} = ${1 * number} \n2`
    // string += `2 * ${number} = ${2 * number} \n3`
    // string += `3 * ${number} = ${3 * number} \n4`
    // string += `4 * ${number} = ${4 * number} \n5`
    // string += `5* ${number} = ${5 * number} \n6`
    // string += `6 * ${number} = ${6 * number} \n7`
    // string += `7 * ${number} = ${7 * number} \n8`
    // string += `8 * ${number} = ${8 * number}\n9`
    // string += `9 * ${number} = ${9 * number}\n10`
    // string += `10 * ${number} = ${10 * number}\n11`
    
    return string
}

//Answer
const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
  }

