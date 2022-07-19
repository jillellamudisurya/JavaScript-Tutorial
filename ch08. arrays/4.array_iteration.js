//Array iteration methods operate on every item.

//1. forEach()
//The forEach() method calls a function (a callback function) once for each array element.
//callback function -> passing function as argument

//Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself

const numbers = [1,2,3,5,6]
numbers.forEach(traverseFunction);

function traverseFunction(value,index){
    console.log(value)
}

// console.log(numbers.forEach((val,ind)=>{
//     return val*2                        //undefined
// })) 

//2.map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

numbers.map(newFunction);
function newFunction(value,index){
    console.log(value*2)
}
console.log(numbers.map((val,ind)=>{
    return val*2
}))

//forEach returns undefined where as map returns new array

//3. filter()
//The filter() method creates a new array with array elements that passes a test(condition)
const age = [23,34,77,2,43,34]
console.log(age.filter((val,ind)=>{  //age > 18 will be returned
    return val>18;
}))

//4. reduce()
//The reduce() method runs a function on 
// each array element to produce (reduce it to) a single value.
//The reduce() method works from left-to-right in the array
//The reduce() method does not reduce the original array.
console.log(age.reduce((total,value,index,array)=>{
    return total+value;  //returns total sum of all age's
}))

//Note that the function takes 4 arguments:
// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself
//The reduce() method can accept an initial value:

let sum = age.reduce(myAgeFun,100); //initial is 100
function myAgeFun(total,value){//If we don't give anything initial will be 0
    return total+value;
}
console.log(sum)

//JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array


//every()
//The every() method check if all array values pass a test.

let allOver18 = age.every(mynewFun);
function mynewFun(value,index,array){
    return value>18;
}
console.log(allOver18) //coz all array values not >18

//some()
//The some() method check if some array values pass a test.
let someOver18 = age.some(someFun);
function someFun(value,index,array){
    return value>18;
}
console.log(someOver18)

//indexOf()
//The indexOf() method searches an array for an element value and returns its position.
console.log("index Of",age.indexOf(34))
//syntax:array.indexOf(item, start)
//Array.indexOf() returns -1 if the item is not found.

//lastIndexOf()
//Array.lastIndexOf() is the same as Array.indexOf(),
//  but returns the position of the last occurrence of the specified element.
console.log("lastIndexOf: ",age.lastIndexOf(34))

//find()
//The find() method returns the value of the first array element that passes a test function.
let firstFind = age.find(myFindFun);
function myFindFun(value,index,array){
    return value>18;
}
console.log("first Find: ",firstFind)

//findIndex()
//The findIndex() method returns the index of the first array element that passes a test function
let firstFindInd = age.findIndex(myFindIndFun);
function myFindIndFun(value,index,array){
    return value>18;
}
console.log("firstFindInd: ",firstFindInd)

//Array.from()
//The Array.from() method returns an Array object from any object with a length property or any iterable object.
console.log("Array.from(): ",Array.from("abcdefg")) //Create an Array from a String

//Array.keys()
//The Array.keys() method returns an Array Iterator object with the keys of an array.
const keys = age.keys() //Create an Array Iterator object, containing the keys of the array
console.log(keys) //[Object [Array Iterator] {}]
for(let x of keys){
    console.log("x: ",x)
}

//entries()

const movies = [
    {
        name:'Bahubali',
        year:2016
    },
    {
        name:'Saaho',
        year:2019
    },
    {
        name:'Billa',
        year:2010
    }
];

for(let [k,v] of movies.entries()){
    console.log("Key: ",k)
    console.log("value: ",v)
}

//The entries() method returns an Array Iterator object with key/value pairs

//includes()
console.log(age.includes(23)) //true
console.log(age.includes(255)) //false

//Array.includes() allows to check for NaN values. Unlike Array.indexOf().