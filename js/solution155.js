//P: given array of numbers

//R: return the mean of the numbers rounded down

function getAverage(marks) {
	return Math.floor(marks.reduce((acc, c) => acc + c, 0) / marks.length);
}
