//Every developer need to know these literals

//Template Literals || Back-Tics Syntax
//Template Literals use back-ticks (``) rather than 
// the quotes ("") to define a string

let str = `Hey Literal`
console.log(str)

//With template literals, you can use both single and double quotes inside a string
let str2 = `Hey' Literal"`
console.log(str2)

//Template literals allows multiline strings
let str3 = `I 
am 
here 
to 
learn
javascript`
console.log(str3)

//Template literals provide an easy way to interpolate variables and expressions into strings.
// The method is called string interpolation.
//syntax: ${...}

//Template literals allow variables in strings
let fname = 'surya';
console.log(`hey ${fname}`)  //hey surya
//Automatic replacing of variables with real values is called string interpolation

//Template literals allow expressions in strings
let a = 2
let b = 1.5
let sum = `sum: ${a+b}`
console.log(sum)