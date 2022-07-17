// When adding a number and a string, 
// JavaScript will treat the number as a string.
let name = 'surya'
let x=5
let y = 4
console.log(x+name)
console.log(x+y+name)

// JavaScript has dynamic types. This means that the 
// same variable can be used to hold different data types:
x = 'change var' //Top x is Number now it is string
console.log(x)

//Java Script Strings
//strings are written with quotes, single or double
let fname = 'surya';
let lname = 'sj'
console.log(fname+' '+lname)

//Java Script Numbers
//Numbers can be written with, or without decimals
let num1 = 2;
let num2 = 2.4
console.log(num1+num2)

// Extra large or extra small numbers can be 
// written with scientific (exponential) notation

let ex1 = 123e5;
let ex2 = 123e-5;
console.log(ex1+' and '+ex2)

//Java Script Booleans
// Booleans can only have two values: true or false.
console.log(ex1 == ex2)
let ex3 = 123e5;
console.log(ex1 == ex3)

//Java Script Arrays
// JavaScript arrays are written with square brackets.
// Array items are separated by commas.

const ids = [617,799,000,001,'surya'] //index starts from 0
console.log(ids)
console.log(ids[0])

//Java Script Objects
// JavaScript objects are written with curly braces {}.
// Object properties are written as name:value pairs, separated by commas.
const fullname = {
    firstname:'surya',
    lastname:'sj'
};
console.log(fullname)
//Accessing Object names
console.log(fullname.firstname)
console.log(fullname['firstname'])

//Type Of Operator
//The typeof operator returns the type of a variable or an expression
console.log(typeof(x))
console.log(typeof(fullname))
console.log(typeof(ids))
console.log(typeof(fname))

// Undefined Type
// In JavaScript, a variable without a value, has 
// the value undefined. The type is also undefined.

let sj;
console.log(sj)

// Empty Values
// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.

let js = '';
console.log(js)
console.log(typeof(js))