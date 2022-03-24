// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


//P: the trolls string

//R: the mutated string


function disemvowel(str) {

//string split
let strArr = str.split('')

//string array filter out vowels

let noVowels = strArr.filter(letter => !'aeiouAEIOU'.includes(letter))

//return string array join
    return noVowels.join('')
  }


  disemvowel('pizza') // pzz
  disemvowel('coffee') //cff

//Refactored

function disemvowel(str){
    return str.split('').filter(letter => !'aeiouAEIOU'.includes(letter)).join('')
}