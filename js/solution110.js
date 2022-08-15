// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
reverseWords("This is an example!") //==> "sihT si na !elpmaxe"
reverseWords("double  spaces")     // ==> "elbuod  secaps"


function reverseWords(str) {
    // split and reverse letters, split and reverse words.
    console.log(str.split('').reverse().join('').split(' ').reverse())
  }