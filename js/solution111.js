// Complete the solution so that the function will break up camel casing, using a space between words.

//Take in a string, always string

//return string



// function solution(string){
//     let arr = string.split('')

//     // loop through each letter until we find an uppercase
//     // splice in a space at that index
//     // return string
//     let index = []

//     arr.forEach((el, i) => el.toUpperCase() === el ? index.push(i + index.length) : el)

//     index.forEach(el => arr.splice(el, 0, ' '))

//     let result = arr.join('')
//     console.log(result)
// }


// Example
solution("camelCasing") //  =>  "camel Casing"
solution("camelCasingTest") //  =>  "camel Casing"
solution("identifier") //   =>  "identifier"
solution("") //             =>  ""

//Refactored

function solution(string){
    let arr = string.split('')

    let upperCaseIndexes = []

    arr.forEach((letter, i) => letter.toUpperCase() === letter ? upperCaseIndexes.push(i + upperCaseIndexes.length) : letter)

    upperCaseIndexes.forEach(el => arr.splice(el, 0, ' '))

    let result = arr.join('')
    console.log(result)
}

