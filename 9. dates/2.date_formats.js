// JavaScript Date Input
// There are generally 3 types of JavaScript date input formats:

// Type	        Example
// ISO Date	    "2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"


//ISO dates can be written without specifying the day (YYYY-MM):
console.log("ISO Y M: ",new Date("2018-03"))
//ISO dates can be written without month and day (YYYY)
console.log("ISO Y: ",new Date("2000"))

//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
const d = new Date("2015-03-25T12:00:00Z");
console.log("D: ",d)


//Date and time is separated with a capital T.
// UTC time is defined with a capital letter Z.
// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead

const d1 = new Date("2015-03-25T12:00:00+05:30");
console.log('D1: ',d1)

//UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
// Omitting T or Z in a date-time string can give different results in different browsers

//JS Short Dates
console.log("short Dates: ",new Date("03/02/2020"))
//In some browsers, months or days with no leading zeroes may produce an error
//The behavior of "YYYY/MM/DD" is undefined.
// Some browsers will try to guess the format. Some will return NaN


//JavaScript Long Dates.
// Long dates are most often written with a "MMM DD YYYY" syntax like this:
console.log("Long Dates: ",new Date("Mar 24 2022"))
//Month and day can be in any order:
//And, month can be written in full (January), or abbreviated (Jan):
//Commas are ignored. Names are case insensitive:

//Date Input - Parsing Dates

// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and January 1, 1970

console.log("parse: ",Date.parse("May 02 2022"))
ms = Date.parse("May 02 2022")
//You can then use the number of milliseconds to convert it to a date object:
console.log("MS to Date: ",new Date(ms))