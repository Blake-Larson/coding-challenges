//if bonus is true return 10x the salary as a string

//P: integer, boolean, always valid

//R: a string with a number and the pound symbol

function bonusTime(salary, bonus) {
	return bonus ? `£${salary * 10}` : `£${salary}`;
}

//Ex:

bonusTime(10, true); // £100
bonusTime(5, false); // £5
