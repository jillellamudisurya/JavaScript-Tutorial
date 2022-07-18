//1. toString()
//The toString() method returns a number as a string.
let num1 = 617;
let str = num1.toString()
console.log(typeof(str))

//2.toExponential()
//toExponential() returns a string, with a number rounded and written using exponential notation.
// A parameter defines the number of characters behind the decimal point
//parameter is optional
let a = 123.2545
console.log(a.toExponential())
console.log(a.toExponential(2))

//3.toFixed() 
//toFixed() returns a string, with the number written with a specified number of decimals.
//parameter defines the numbers after decimal
console.log(a.toFixed(1))

//4.toPrecision()
//toPrecision() returns a string, with a number written with a specified length
console.log(a.toPrecision())
console.log(a.toPrecision(6))
console.log(a.toPrecision(2))

//5.valueOf()
//valueOf() returns a number as a number.
//In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
console.log(a.valueOf())
console.log((1+2).valueOf())

//Note: All JavaScript data types have a valueOf() and a toString() method.

//Converting Variables to Numbers
//There are 3 JavaScript methods that can be used to convert variables to numbers
// The Number() method
// The parseInt() method
// The parseFloat() method

// Method	            Description
// Number()	            Returns a number, converted from its argument.
// parseFloat()	        Parses its argument and returns a floating point number
// parseInt()	        Parses its argument and returns an integer

//6. Number()
//Number() can also convert a date to a number.
// The Number() method returns the number of milliseconds since 1.1.1970.
console.log(Number(true))
console.log(Number('10'))
console.log(Number('  10  '))
console.log(Number('10.22'))
console.log(Number('surya'))
console.log(Number(new Date("2000-05-02")))

//7.parseInt()
//parseInt() parses a string and returns a whole number. 
// Spaces are allowed. Only the first number is returned
console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10.33"))
console.log(parseInt("10 years"))
console.log(parseInt("20 30 40"))
console.log(parseInt("years 10"))

//8.parseFloat()
//parseFloat() parses a string and returns a number. 
// Spaces are allowed. Only the first number is returned:
console.log(parseFloat("-10"))
console.log(parseFloat("-10.33"))
console.log(parseFloat("10.33"))
console.log(parseFloat("10 years"))
console.log(parseFloat("20 30 40"))
console.log(parseFloat("years 10"))

// Number Properties
// Property 	        Description
// MAX_VALUE	        Returns the largest number possible in JavaScript
// MIN_VALUE	        Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
// NaN	                Represents a "Not-a-Number" value

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)

// Number Properties Cannot be Used on Variables
// Number properties belongs to the JavaScript's number object wrapper called Number.
// These properties can only be accessed as Number.MAX_VALUE.