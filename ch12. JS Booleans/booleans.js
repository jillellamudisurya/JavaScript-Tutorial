// A JavaScript Boolean represents one of two values: true or false.
// Boolean Values
// Very often, in programming, you will need a data type that can only have one of two values, like

// YES / NO
// ON / OFF
// TRUE / FALSE

console.log(Boolean(1>2))
//also write as
console.log(1>2)
console.log(1<2)

//Comparisons and Conditions
// Operator	Description
// ==	    equal to	
// >	    greater than	
// <	    less than
console.log(2==3);
//Everything With a "Value" is True if(0),if('hello')
//Everything Without a "Value" is False

console.log(Boolean(0)) //false
console.log(Boolean(-0))//false
console.log(Boolean(-9)) //true //with value
console.log(Boolean("")) //boolean of empty string is false
console.log(Boolean(undefined)) //boolean of undefined is false
console.log(Boolean(null)) //boolean of null is false
console.log(Boolean(false)) //false is false
console.log(Boolean("false")) //true //coz it's value
console.log(Boolean(NaN)) //boolean of NaN is false
//booleans can also be defined as objects with the keyword new
let y = new Boolean(true);
console.log(typeof(y))
//Do not create Boolean objects.
// The new keyword complicates the code and slows down execution speed.
// Boolean objects can produce unexpected results: