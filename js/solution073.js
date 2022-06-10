// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P: string, no numbers and its only lower case.

//R: return a number representing the vowel count





function getCount(str) {
    //split str into array
    strArr = str.split('')
    // filter each character for vowel
    let vowelArr = strArr.filter(c => c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
    // return vowel array length
    return vowelArr.length
  }


  //Example:

console.log(getCount('pizza')) // 2
console.log(getCount('dog')) // 1