// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2){
    //split and sort. Filter if the letter !== previous letter
    return (s1 + s2).split('').sort().filter((letter, i, array) => letter !== array[i - 1]).join('')
}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")