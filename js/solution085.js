// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
accum("abcd") //-> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s){
    //split
    s = s.split('')

    //iterate based on position
    s = s.map((letter, i) => {
        let extras = ''
        for (let x = 0; x < i; x++ ){
            extras += letter.toLowerCase()
        }
        return letter.toUpperCase() + extras
        })
    //join with a hyphen
   return s.join('-')
}
function accumRefactored(s){
    return s.split('').map((letter, i) => {
        let extras = ''
        for (let x = 0; x < i; x++ ){
            extras += letter.toLowerCase()
        }
        return letter.toUpperCase() + extras
        }).join('-')
}