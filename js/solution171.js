//function that when given a url as a string, parses out just the domain name and returns it as string.

//always string, not empty, always valid url, no caps, always have prefix of http

//return domain name as string

// "http://github.com/carbonfive/raygun" -> github
// "http://www.zombie-bites.com" -> zombie-bites
// "https://www.cnet.com" -> cnet

// function getDomain(str) {
//     // use replace to remove the https and replace with ''
//     let newString

//     if (str[4] === ':') {
//       newString = str.replace("http://", "")
//     } else {
//       newString = str.replace("https://", "")
//     }
//     // use split with the . seperator

//     splitStr = newString.split('.')

//     return splitStr[0] === 'www' ? splitStr[1] : splitStr[0]

//   }

function getDomain(str) {
	str = str.replace('https://', '');
	str = str.replace('http://', '');
	str = str.replace('www', '');
	return str.split('.')[0];
}
console.log(getDomain('http://github.com/carbonfive/raygun'), 'github');
console.log(getDomain('http://www.zombie-bites.com'), 'zombie-bites');
console.log(getDomain('https://www.cnet.com'), 'cnet');
