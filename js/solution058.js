// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

var list1 = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Noa',
    lastName: 'A.',
    country: 'Israel',
    continent: 'Asia',
    age: 40,
    language: 'Ruby',
  },
  {
    firstName: 'Andrei',
    lastName: 'E.',
    country: 'Romania',
    continent: 'Europe',
    age: 59,
    language: 'C',
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 60,
    language: 'C',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 75,
    language: 'Python',
  },
  {
    firstName: 'Chloe',
    lastName: 'K.',
    country: 'Guernsey',
    continent: 'Europe',
    age: 88,
    language: 'Ruby',
  },
  {
    firstName: 'Viktoria',
    lastName: 'W.',
    country: 'Bulgaria',
    continent: 'Europe',
    age: 98,
    language: 'PHP',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
  },
];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.

function isAgeDiverse(list) {
  // take each persons age and categorize them in a group
  let teens = 0;
  let twenties = 0;
  let thirties = 0;
  let forties = 0;
  let fifties = 0;
  let sixties = 0;
  let seventies = 0;
  let eighties = 0;
  let nineties = 0;
  let centenarian = 0;

  list.forEach(person => {
    if (person.age < 20) {
      teens++;
    } else if (person.age < 30) {
      twenties++;
    } else if (person.age < 40) {
      thirties++;
    } else if (person.age < 50) {
      forties++;
    } else if (person.age < 60) {
      fifties++;
    } else if (person.age < 70) {
      sixties++;
    } else if (person.age < 80) {
      seventies++;
    } else if (person.age < 90) {
      eighties++;
    } else if (person.age < 100) {
      nineties++;
    } else {
      centenarian++;
    }
  });
  const currentAges = [
    teens,
    twenties,
    thirties,
    forties,
    fifties,
    sixties,
    seventies,
    eighties,
    nineties,
    centenarian,
  ];
  //add each group to an array to check

  //every number is greater than 1
  console.log(currentAges.every(ageCount => ageCount > 0));
}
isAgeDiverse(list1);
