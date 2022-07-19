//sort()
//The sort() method sorts an array alphabetically{ascending}

const arr = [3444,3454,3,345,34]
console.log(arr.sort())
console.log(arr.sort().reverse()) //to reverse or descending

//By default, the sort() function sorts values as strings.
const arr2 = [1,3,120,100,5];
console.log(arr2.sort()) //[1,100,120,3,5] coz it's only consider first char
//let's take 100, it consider 100 as string and compare with first
//character means 1<3 so it will sort 100 first

//the sort() method will produce incorrect result when sorting numbers
//We can fix this by providing a compare function:
//The Compare Function
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:
console.log(arr2.sort(function(a,b){console.log(a,b)
    return a-b}))

//When the sort() function compares two values, it sends the values to the compare function, and sorts the values 
// according to the returned (negative, zero, positive) value.
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.

//b-a for descending order

//Sorting an Array in Random Order
const arr3 = [40,100,1,5,25,10]
console.log(arr3.sort(function(a,b){return 0.5-Math.random()}))

//The Fisher Yates Method
const arr4 = [40,100,1,5,25,10]
for(let i =arr4.length-1;i>0;i--){
    let j = Math.floor(Math.random()*i)
    // console.log(j)
    let k = arr4[i]
    arr4[i]=arr4[j]
    arr4[j]=k
}
console.log(arr4)

//Find the Highest (or Lowest) Array Value
// There are no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
arr4.sort(function(a,b){return a-b})
//here arr[0] is smallest arr[arr.length-1] is largest

//Using Math.max() on an Array
let arr5 = [45,45,4875,45,54,457]
function myArrayMax(arr){
    return Math.max.apply(null,arr) //Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
}
console.log(myArrayMax(arr5))  
function myArrayMin(arr){
    return Math.min.apply(null,arr)
}
console.log(myArrayMin(arr5))

//Personal Method
let newArr = [1,2,3,5,34]
let max = -Infinity;
for(let i = 0;i<newArr.length;i++){
    if(newArr[i]>max){  //newArr[i]<min then min = newArr[i]
        max=newArr[i]  //for lowest element
    }
}
console.log("Max: ",max)

//Sorting Object Arrays
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

console.log(movies.sort(function(a,b){return a.year - b.year}))