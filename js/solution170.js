//given a number, print out every integer from 1 to that number. When the integer is divisible by 3, print Fizz and when divis by 5 print Buzz and by both pring Fizz Buzz.

//always a number, always whole integer, only pos, not empty, never less than one

//printed as string, Fizz, Buzz, Fizz Buzz, one at a time

// 5 -> 1,2,Fizz, 4, Buzz
// 15 -> 1,2,Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz
// 2 -> 1,2

function fizzBuzz(num) {
	for (let i = 1; i <= num; i++) {
		// if div 3 5 FizzBuzz
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
			// else if div 3 Fizz
		} else if (i % 3 === 0) {
			console.log('Fizz');
			// else if div 5 Buzz
		} else if (i % 5 === 0) {
			console.log('Buzz');
			//else print the number
		} else {
			console.log(i);
		}
	}
}

fizzBuzz(5); //"1,2,Fizz, 4, Buzz")
fizzBuzz(15); //"1,2,Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz")
fizzBuzz(2); // "1,2 ")
