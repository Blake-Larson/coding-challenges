// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// P: strings, always valid
// R: string without the stuff after #

function removeUrlAnchor(url) {
	//split
	let urlArr = url.split('');

	//use .findIndex to find the first #
	let index = urlArr.findIndex(el => el === '#');

	//splice the rest of the array.
	if (index !== -1) {
		urlArr.splice(index);
	}

	//return
	return urlArr.join('');
}

// Examples
removeUrlAnchor('www.codewars.com#about'); // --> "www.codewars.com"
removeUrlAnchor('www.codewars.com?page=1'); // -->"www.codewars.com?page=1"
removeUrlAnchor('www.codewars.com/katas');
removeUrlAnchor('www.codewars.com/katas/');

//Better answer
function removeUrlAnchor(url) {
	return url.split('#')[0];
}
