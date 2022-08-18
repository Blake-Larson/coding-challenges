//take number and turn into string with dollar sign

//P: Number whole, fized to two decimals

//R: string

function formatMoney(amount) {
	return `$${amount.toFixed(2)}`;
}

//Exmaples:

formatMoney(39.99); // '$39.99'
formatMoney(3); // '$3.00'
formatMoney(3.1); // '$3.10'
