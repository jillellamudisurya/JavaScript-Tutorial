// JavaScript has only one type of number. 
// Numbers can be written with or without decimals.
let x = 1;
let y = 1.5;
console.log("x:",x,"y:",y)
// Extra large or extra small numbers can be written with 
// scientific (exponent) notation
let p = 123e5;
let q = 123e-5;
console.log("p:",p,'q:',q)

// Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
// JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
// This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63

//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

//Adding Numbers and Strings
//JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.

let num1 = 5;
let num2 = 4;
let str1 = 'five'
let str2 = 'four' 
console.log(num1+num2)
console.log(str1+str2)
//If you add a number and a string, the result will be a string concatenation
console.log(num1+str1)

//The JavaScript interpreter works from left to right.
console.log(num1+num2+str1)

//Numeric Strings
//JavaScript will try to convert strings to numbers in all numeric operations

let str3 = '100'
let str4 = '10'
console.log(str3/str4)
console.log(str3+str4) //it won't work as numeric operation..
//it concatenates //10010

//NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
console.log(100/'a')
// You can use the global JavaScript function isNaN() to find out if a value is a not a number
console.log(isNaN('apple'))
//Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN
let nn = NaN
console.log(num1+nn)
//NaN is a number: typeof NaN returns number
console.log(typeof NaN)

//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number
let num4 = 1;
while(num4!=Infinity){
    num4 = num4*2;
}
console.log(num4)
//Division by 0 (zero) also generates Infinity
//Infinity is a number: typeof Infinity returns number

//Hexadecimal
//JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x
console.log(0xFF)

//By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

let xy = 32;
console.log(xy.toString(36)); //Hexatrigesimal
console.log(xy.toString(32)); //Duotrigesimal
console.log(xy.toString(16)); //HexaDecimal
console.log(xy.toString(12)); //Duodesimal
console.log(xy.toString(10)); //Decimal
console.log(xy.toString(8)); //Octal
console.log(xy.toString(2)); //Binary

//numbers can also be defined as objects with the keyword new
let yx = new Number(123);
console.log('Number: ',yx,"type: ",typeof(yx))

//Do not create Number objects.
// The new keyword complicates the code and slows down execution speed.
// Number Objects can produce unexpected results

//ImpNote:: JavaScript Objects cannot be compared
//Comparing two JavaScript objects always returns false
let xyy = new Number(123)
console.log(yx==xyy) //false
console.log(yx===xyy) //false