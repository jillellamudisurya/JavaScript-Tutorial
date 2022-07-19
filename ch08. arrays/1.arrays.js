//JavaScript Arrays
//An array is a special variable, which can hold more than one value
const arr1 = [1,2,3];
console.log(arr1)

//If we want to store more than one value and also loop through all 
//the values, then array is best solution.

//Syntax:const array_name = [item1, item2, ...]; 
// Spaces and line breaks are not important. A declaration can span multiple lines
//You can also create an array, and then provide the elements

//Note: Array indexes start with 0.
const arr2 = []
arr2[0]='banana'
arr2[1]="Mango";
console.log(arr2)

//Using the JavaScript Keyword new
const arr3 = new Array(617,725,498)
console.log(arr3)

// Accessing Array Elements
// You access an array element by referring to the index number
console.log(arr3[0])

//Changing an Array Element
arr2[0]="Orange";
console.log(arr2) //[ 'Orange', 'Mango' ]

// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name
console.log(arr2)

//Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements".
console.log(typeof(arr1))
//Arrays use number to access the element
//whereas Objects use names to access.

//you can have variables of different types in the same Array
const arr4 = [{name:'surya'},'javascript',5,Date.now()]
console.log(arr4)

//Accessing the First Array Element(0) and Last Element(-1)
console.log("First: ",arr4[0],"Last: ",arr4[arr4.length-1])
//Length is property of arrays to find length of array

//Looping Array Elements
// One way to loop through an array, is using a for loop
for(let i = 0;i<arr1.length;i++){
    console.log(arr1[i]) //1 2 3
}

//You can also use the Array.forEach() function
arr1.forEach((element,i)=>{
    console.log('arrow',element)
})
//The above function in normal function
arr1.forEach(printFun);
function printFun(value){
    console.log('normal',value)
}

//Adding Array Elements
// The easiest way to add a new element to an array is using the push() method
arr1.push(4);
console.log(arr1)
//New element can also be added to an array using the length property
arr1[arr1.length]=5;
console.log(arr1)

//Note: Adding elements with high indexes can create undefined "holes" in an array:

//When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

const points = new Array(40);  
console.log(points) //problem with new keyword.. it work fine for 2 or more elements
//but for one element it creates that much length array with undefined elements

//How to recognize array.
//coz it returns object if we use typeof
//for that we need to use Array.isArray(array_name)