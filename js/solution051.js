//return an array where each object with have a new property 'greeting' with the following string value:

//Hi < firstName here >, what do you like the most about < language here >?

//P: list, an array of objects of people


//R: list - an array of objects of people



function greetDevelopers(list) {
    // for each object , add a new property called greeting with a value of the string template
    list.forEach(person => person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`)
    return list
}








//E:

var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

greetDevelopers(list1)

//return 
// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//   greeting: 'Hi Sofia, what do you like the most about Java?'
// },
// { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//   greeting: 'Hi Lukas, what do you like the most about Python?'
// },
// { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//   greeting: 'Hi Madison, what do you like the most about Ruby?'
// } 
// ];