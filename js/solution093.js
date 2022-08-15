<<<<<<< HEAD
//define a book with n pages with pages 1 to n
//define summary adding up the digits of all page numbers

//given the summary find the number of pages the book has

// a positive integer > 0

// return number of pages

// example:

// 6 => 1,2,3,4,5,6
// 11 => 1,2,3,4,5,6,7,8,9,10

function getPages(){
    // 9 or less same number of pages as summary

    // 10 


}
=======
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
nbYear(1500, 5, 100, 5000)// -> 15
nbYear(1500000, 2.5, 10000, 2000000)// -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.


function nbYear(p0, percent, aug, p) {
    let years = 0
    for (years; p0 <= p; years++ ){
        p0 = Math.floor(p0 + p0 * percent / 100 + aug)
    }
    return years
}

>>>>>>> 61c31d336e0c64532e89d6e81dace67da163c311
