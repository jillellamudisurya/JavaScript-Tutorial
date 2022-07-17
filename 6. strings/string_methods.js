//String Methods and Properties

const string1 = "Hello World!"

//String index also starts from 0
//Space also counts

//Length
stringLength = string1.length;
console.log(stringLength)

// Extracting String Parts -> Getting the required part from string.
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

//Slice
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
let sliceString = string1.slice(3,10) //We will get index 3 to index 9
console.log(sliceString)

// If a parameter is negative, the position is counted from the end of the string.
let negativeSlice = string1.slice(-10,-6)
console.log(negativeSlice) //!=-1,H=-12 length is 4,

// If you omit the second parameter, the method will slice out the rest of the string:
console.log(string1.slice(4))
console.log(string1.slice(-12)) //Hello World!

//subString
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
const subString = string1.substring(1,5)
console.log(subString)
console.log(string1.substring(-100,5)); //Hello (as it consider first values as 0)

// JavaScript String substr()
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let substr = string1.substr(0,4) //start index 1 and from there length 4
console.log(substr) //substr method is deprecated

//Replace
// The replace() method replaces a specified value with another value in a string
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match

let college = "Rajiv Gandhi University";
let collegeUpdate = college.replace('University','University Of Knowledge Technologies')
console.log(collegeUpdate)

//replace() method is case sensitive
let text = 'i am good and i am bad';
let newText = text.replace('I','He')
console.log(newText) //won't change anything

let newText2 = text.replace('i','I')
console.log(newText2) //Replace only first I

//To Replace all matches and also replace case insensitive
//we need to use regular expression

let text1 = "i and i"
let newText1 = text1.replace(/I/i,'I') // /i - case insensitive
console.log(newText1)

let newText3 = text.replace(/i/g,'I') // /g - replace all matches
console.log(newText3)  //I am good and I am bad

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase()
// A string is converted to lower case with toLowerCase()
let courseName = 'JavaScript';
console.log(courseName.toLowerCase()) //javascript
console.log(courseName.toUpperCase()) //JAVASCRIPT

//Concat
// concat() joins two or more strings
// The concat() method can be used instead of the plus operator.
let firstname = 'hello';
let lastname = 'world';
let fullname = firstname.concat(lastname);
console.log("FullName: ",fullname)

//Trim()
// The trim() method removes whitespace from both sides of a string
let trim1 = '   hey   ';
console.log(trim1.trim())
console.log("trim1 without trim()",trim1.length) //9
console.log("trim1 with trim()",trim1.trim().length) //3

// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

let extractString = 'javascript'
//charAt
console.log(extractString.charAt(0))
//charCodeAt
console.log(extractString.charCodeAt(0)) //returns UTF-16 code
//propertyAccess
console.log(extractString[0])

//Converting a String to an Array
//split() method
//A string can be converted to an array with the split() method
let str = 'h,e,l,l,o';
console.log(str.split(','))
