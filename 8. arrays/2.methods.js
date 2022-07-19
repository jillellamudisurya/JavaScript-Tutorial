//length
//To find the length of an array
arr1 = [1,2,3,4]
console.log(arr1.length)

//sort
//To Sort the array elements
arr2 = [3,53,2,435,1];
console.log(arr2.sort())

//toString()
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(arr1.toString())

//The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator
console.log(arr2.join('/'))

//Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// Popping items out of an array, or pushing items into an array.
//The pop() method removes the last element from an array
// The pop() method returns the value that was "popped out"
//The push() method adds the element to last of an array
//The push() method returns the new array length
const arr3 = ['s','u','r','y','a'];
let popElem = arr3.pop();
console.log(popElem)
console.log(arr3)
//console.log(arr3.push('a')) //returns 5
arr3.push('a')
console.log(arr3)

//shift()
//The shift() method removes the first array element 
// and "shifts" all other elements to a lower index.
console.log(arr3.shift()) //s
console.log(arr3)

//unshift()
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(arr3.unshift('s')) //returns length
console.log(arr3)

//concat()
//The concat() method creates a new array by merging (concatenating) existing arrays
const arr4 = arr1.concat(arr2)
//console.log(arr4.length) //length:9
console.log(arr4)
//The concat() method can take any number of array arguments:
const arr5 = arr4.concat(arr1,arr2)
// console.log(arr5.length)//length:18
console.log(arr5)

//The concat() method can also take strings as arguments:
const arr6 = arr3.concat('j')
console.log(arr6)

//Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

//splice()
// The splice() method adds new items to an array.
const lang = ['js','react','node','express','html']
lang.splice(2,0,'python','java')
console.log(lang)

//The first parameter (2) defines the position(index) where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("python" , "java") define the new elements to be added.

// The splice() method returns an array with the deleted items:
 //Removed elements
//from index 2 -> two elements ('python','java') will be removed(spliced)

//With the help of splice we can able to add as well as remove elements
//Remove Syntax: splice(2,2)
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (2) defines how many elements should be removed.
console.log(lang.splice(2,2))
console.log(lang)

//slice()
//The slice() method slices out a piece of an array into a new array.
const newLang = ['golang','ROR','spring']
console.log("New Lang",newLang);

const newLang1 = newLang.slice(1)
// slices out a part of an array starting from array element 1
console.log(newLang1)
//The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

const newArr = [1,2,3,4,5];
const newArrdup = newArr.slice(3);
console.log(newArrdup) //[4,5]
//It slices out new array from element position(index) 3 -> element 4 to last element of array
// The slice() method can take two arguments like slice(1, 3)
const newArrdup1 = newArr.slice(1,4);
// The method then selects elements from the start argument, and up to (but not including) the end argument.
console.log(newArrdup1) //starts from index 1, ends with index 3 which means (2,3,4)
// If the end argument is omitted, [newArraydup]the slice() method slices out the rest of the array.

//There are no built-in functions for finding the highest or lowest value in a JavaScript array.