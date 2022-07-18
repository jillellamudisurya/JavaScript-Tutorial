//Java Script Search Methods

//indexOf()
// The indexOf() method returns the index of (the position of) 
// the first occurrence of a specified text in a string
let str = "javascript";
console.log(str.indexOf('a'))


//lastIndexOf()
// The lastIndexOf() method returns the index of the 
// last occurrence of a specified text in a string
console.log(str.lastIndexOf('a'))

// Both indexOf(), and lastIndexOf() return -1 if the text is not found
// Both methods accept a second parameter as the starting position for the search

console.log(str.indexOf('a',2)) //index 2 is starting position

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, 
// the search starts at position 15, and searches to the beginning of the string.

console.log(str.lastIndexOf('a',2)) //1 coz we start backward search from index 2

//search()
//The search() method searches a string for a specified value and returns the position of the match

console.log(str.search('a'))

// Did You Notice?
// The two methods, indexOf() and search(), are equal?
// They accept the same arguments (parameters), and return the same value?
// The two methods are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


//match()
//The match() method searches a string for a match against a regular expression, 
// and returns the matches, as an Array object.

let newString = "The rain in SPAIN is stays mainly in the plain";
console.log(newString.match(/ain/g)) //won't get AIN
console.log(newString.match(/ain/gi)) //will get all


//includes()
// The includes() method returns true if a string contains a specified value
//else returns false if it won't find the value
console.log(newString.includes('rain')) //true
console.log(newString.includes('rain',10)) //10-start index //false


//startsWith()
//The startsWith() method returns true if a string begins with a specified value, 
// otherwise false
//The startsWith() method is case sensitive.

console.log(newString.startsWith('the')) //false
console.log(newString.startsWith('The')) //true

console.log(newString.startsWith('The',5)) //false //5->start index


//endsWith()
//The endsWith() method returns true if a string ends with a specified value,
// otherwise false
//The endsWith() method is case sensitive.
//Syntax:: string.endsWith(searchvalue, length)
//length means The length to search

let str2 = 'hello world, I am javascript info';
console.log(str2.endsWith('info')) //true
console.log(str2.endsWith('Info')) //false
console.log(str2.endsWith('hello')) //false
console.log(str2.endsWith('hello',5)) //true 
//do hello is the end for first 5 index (here yes so true)