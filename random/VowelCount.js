//Prompt:
//Enter a string and the program counts the number of vowels in the text.
//For added complexity have it report a sum of each vowel found.
var a = 0;
var e = 0;
var i = 0;
var o = 0;
var u = 0;
var y = 0;
var str = prompt('String?');
var arr = str.split('');
var x = 0;
while(x <= arr.length) {
	if(arr[x] == 'a') {
		a++;
	} else if(arr[x] == 'e') {
		e++;
	} else if(arr[x] == 'i') {
		i++;
	} else if(arr[x] == 'o') {
		o++;
	} else if(arr[x] == 'u') {
		u++;
	} else if(arr[x] == 'y') {
		y++;
	}
	x++;
}
console.log('a: ' + a);
console.log('e: ' + e);
console.log('i: ' + i);
console.log('o: ' + o);
console.log('u: ' + u);
console.log('y: ' + y);