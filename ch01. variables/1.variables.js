//In Javascript we can declare variable using 4 ways
// 1. var
// 2. let
// 3. const
// 4. using nothing


//Difference between var let and const is their scope and usage.

// console.log(x) -- Undefined
let xy;
// console.log(xy)//Here we get undefined
var x = 4;
var y = x;
x = 'surya'
console.log(x,y)
//Here Y won't change.
//Primitive Data Types in JS uses -> Pass BY Value.. 
//Non Primitive Data Types follow -> Pass By Reference

const _name = "surya"
const id = "S160617"
let details = _name+id
console.log(details)

// id = 'S160000' //Here We get error coz we declared id using const.
//variable declared with const can't be changed

let p = 5;
console.log(p)
p = 4;
console.log(p)

let abc = 'surya', xyz = '24';
console.log(abc+' '+xyz)

//We can re-declare JS var where as not possible with let

var var1 = 123
var var1 = 143
console.log(var1)
let let1 = 123
// let let1 = 143 //Here We Get Error
console.log(let1)

//Let's see concate
let sj = 1
let js = 'surya'
let sjs = sj+js
console.log(sjs)

let $ = 80;
console.log($)