//The JavaScript Math object allows you to perform mathematical tasks on numbers.

//Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object first.

//Syntax: Math.property

console.log(Math.E )       // returns Euler's number
console.log(Math.PI)       // returns PI
console.log(Math.SQRT2)    // returns the square root of 2
console.log(Math.SQRT1_2)  // returns the square root of 1/2
console.log(Math.LN2 )     // returns the natural logarithm of 2
console.log(Math.LN10 )    // returns the natural logarithm of 10
console.log(Math.LOG2E)    // returns base 2 logarithm of E
console.log(Math.LOG10E)   // returns base 10 logarithm of E

//Math Methods

//Syntax:Math.method(number)

// Number to Integer
// There are 4 common methods to round a number to an integer:

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	    Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

console.log(Math.round(2.4))
console.log(Math.ceil(2.4))
console.log(Math.floor(2.4))
console.log(Math.floor(-2.4))
console.log(Math.trunc(24.25))

//Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(-5))
console.log(Math.sign(0))
console.log(Math.sign(5))

//Math.pow(x, y) returns the value of x to the power of y
console.log(Math.pow(2,3))

//Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64))

//Math.abs(x) returns the absolute (positive) value of x
console.log(Math.abs(-2.4))

//Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.

console.log(Math.sin(90*Math.PI/180)) //sin 90 degrees = 1

// Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.

console.log(Math.cos(0*Math.PI/180))

//Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
console.log(Math.max(1,52,2,250))
console.log(Math.min(1,52,2,250))

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random())

//Math.log(x) returns the natural logarithm of x.
// The natural logarithm returns the time needed to reach a certain level of growth
console.log(Math.log(1))

//Math.log2(x) returns the base 2 logarithm of x.
console.log(Math.log2(8))

//Math.log10(x) returns the base 10 logarithm of x.
console.log(Math.log10(1000))


// JavaScript Math Methods
// Method	Description
// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
// cosh(x)	Returns the hyperbolic cosine of x
// exp(x)	Returns the value of Ex
// floor(x)	Returns x, rounded downwards to the nearest integer
// log(x)	Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Rounds x to the nearest integer
// sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
// sin(x)	Returns the sine of x (x is in radians)
// sinh(x)	Returns the hyperbolic sine of x
// sqrt(x)	Returns the square root of x
// tan(x)	Returns the tangent of an angle
// tanh(x)	Returns the hyperbolic tangent of a number
// trunc(x)	Returns the integer part of a number (x)