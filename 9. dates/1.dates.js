//JavaScript Date Object lets us work with dates

const d = new Date()
console.log("Date: ",d)

//By default, JavaScript will use the browser's time zone and display a date as a full text string
//There are 4 ways to create a new date object
//1.new Date() 2.newDate(ear, month, day, hours, minutes, seconds, milliseconds)
//3. new Date(milliseconds) 4. new Date(date string)

//new Date() creates a new date object with the current date and time:
console.log('new Date(): ',new Date())

//new Date(year, month, ...) creates a new date object with a specified date and time.
console.log('new Date(year,month...): ',new Date(2000,04,01)) 

//Date months starts from 0 means 0-jan 11-dec and dates 0 means 1, 30 means 31

//Specifying a month higher than 11, will not result in an error but add the overflow to the next year

//6 numbers specify year, month, day, hour, minute, second:
//5 numbers specify year, month, day, hour, and minute:
//4 numbers specify year, month, day, and hour:
//3 numbers specify year, month, and day:
//2 numbers specify year and month:

//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

console.log("One Param: ",new Date(2015)) //2015 milli seconds


//Previous Century
// One and two digit years will be interpreted as 19xx:
console.log("prev1: ",new Date(99,11,25))
console.log("prev1: ",new Date(9,11,25))


//new Date(dateString)
// new Date(dateString) creates a new date object from a date string:
const dt = new Date("May 2, 2000 07:30:12")
console.log("dt string: ",dt)

//JavaScript Stores Dates as Milliseconds
//JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
console.log("zero date: ",new Date(0))
console.log("ms: ",new Date(86400000)) //86 400 000 milli seconds (oneDay)

console.log(new Date().toString()) //in String Format

//The toUTCString() method converts a date to a UTC string (a date display standard).
console.log('utcstring: ',new Date().toUTCString())

//The toDateString() method converts a date to a more readable format:
console.log('toDateString: ',new Date().toDateString())

// /The toISOString() method converts a Date object to a string, using the ISO standard format
console.log('to Iso string: ',new Date().toISOString())