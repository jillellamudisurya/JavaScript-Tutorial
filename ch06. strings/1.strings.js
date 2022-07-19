console.log('strings')
// A JavaScript string is zero or more characters written inside quotes.
const a = ''; //Empty String
const b = 'i am b'; //String with some name
console.log("a type: ",typeof(a))
console.log("b type: ",typeof(b))

//We can use single or double quotes to write strings in JS
let fname = 'surya';
let lname = "js";
console.log(fname+' '+lname);
console.log("fname Type:",typeof(fname))
console.log("lname Type:",typeof(lname))

// You can use quotes inside a string, as long as
//  they don't match the quotes surrounding the string
let q = 'I am q"s';
let p = "I am p's";
console.log(p,q)

//Escape Character
// Code	Result	Description
// \'	   '	 Single quote
// \"	   "	 Double quote
// \\	   \	 Backslash
console.log('I am sj\'s')
console.log("I am js\"s")

// Six other escape sequences are valid in JavaScript:

// Code	Result
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator
