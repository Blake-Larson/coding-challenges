// return the number of JS developers from Europe

//P an object of different people attending

//R number of people as a number


function countDevelopers(list) {
    
    //check each continent and language.

    //add number each time

    let count = 0
    list.forEach(person => person.continent === 'Europe' && person.language === 'JavaScript' ? count += 1 : null)
    return count

  }

//E:


const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

countDevelopers(list1) // 1
