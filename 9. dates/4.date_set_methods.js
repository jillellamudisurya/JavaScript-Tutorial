// Set Date Methods
// Set Date methods are used for setting a part of a date:

// Method	            Description
// setDate()	        Set the day as a number (1-31)
// setFullYear()	    Set the year (optionally month and day)
// setHours()	        Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	        Set the minutes (0-59)
// setMonth()	        Set the month (0-11)
// setSeconds()	        Set the seconds (0-59)
// setTime()	        Set the time (milliseconds since January 1, 1970)

//The setFullYear() method sets the year of a date object.
console.log("Set Full Year: ",new Date().setFullYear(2027))
// The setFullYear() method can optionally set month and day:
console.log("Set Full Year with Month & Date: ",new Date().setFullYear(2027,04,02))

//The setMonth() method sets the month of a date object (0-11):
console.log("Set Month: ",new Date().setMonth(04))

//The setDate() method sets the day of a date object (1-31)
console.log("Set Date: ",new Date().setDate(1))
//The setDate() method can also be used to add days to a date:
console.log("Set Date Add Days: ",new Date().setDate(new Date().getDate()+50))

//The setHours() method sets the hours of a date object (0-23):
console.log("Set Hours: ",new Date().setHours(14))

//The setMinutes() method sets the minutes of a date object (0-59):
console.log("Set Minutes: ",new Date().setMinutes(24))

//The setSeconds() method sets the seconds of a date object (0-59)
console.log("Set Seconds: ",new Date().setSeconds(23))

//Compare Dates
// Dates can easily be compared.
let text = '';
const today = new Date();
const someday = new Date();
someday.setFullYear(2014,02,23)
if(someday>today){
    text = "Today is before mar 24 2014"
}else{
    text = "Today is after mar 24 2014"
}
console.log("Text: ",text)
