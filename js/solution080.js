// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.


//P: string

//R: two middle letters as a string if even, middle letter as string if odd

// #Examples:

getMiddle("test") //should return "es"

getMiddle("testing") //should return "t"

getMiddle("middle") //should return "dd"

getMiddle("A") //should return "A"


// function getMiddle(s){
//     if(s.length % 2 === 0){
//     return `${s.charAt((s.length / 2) - 1)}${s.charAt(s.length / 2)}`
//     } else {
//     return `${s.charAt(Math.floor(s.length / 2))}`
//     }
// }


// Refactored

function getMiddle(s){
    s.length % 2 === 0 ? `${s.charAt((s.length / 2) - 1)}${s.charAt(s.length / 2)}` : `${s.charAt(Math.floor(s.length / 2))}`
}