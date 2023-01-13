//Given an index, return the value from that index of the fibonacci sequence

// always valid number, whole number

//return number

// fib(5), 5
// fib(3), 2

function fib(n) {
	let seq = [0, 1];

	for (let i = 2; i <= n; i++) {
		seq.push(seq[i - 1] + seq[i - 2]);
	}
	return seq[n];
}

console.log(fib(5), 5);
console.log(fib(3), 2);
console.log(fib(2), 1);
