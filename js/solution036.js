


// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//P: string, not including y, leave uppercase alone

//R: the string without lowercase vowels console logged

//E:


function shortcut(string){
    //find lowercase vowels in string
    stringArr = string.split('')
    //remove those
    filteredArr = stringArr.filter(letter => letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u')
    //join Array and log
    console.log(filteredArr.join(''))
}

shortcut('hello')// 'hll'
shortcut('codewars')// 'cdwrs'

