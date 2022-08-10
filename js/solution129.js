// Leetcode 234. Palindrome Linked List

//P: an array of nubmers between 1 and 9

//R: boolean if palindrome or not

function isPalindrome(head) {
	//if even length
	//split array in half
	let first = head.slice(0, head.length / 2);
	let second = head.slice(head.length / 2);
	//reverse it
	first.reverse();
	//check if they are equal
	let result;
	for (let i = 0; i < first.length; i++) {
		result = second.indexOf(first[i]) !== -1;

		if (result === false) {
			break;
		}
	}
	return result;
}

//examples
isPalindrome([1, 2, 2, 1]); //true
isPalindrome([1, 2]); //false
