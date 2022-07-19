// Method	            Description
// getFullYear()	    Get the year as a four digit number (yyyy)
// getMonth()	        Get the month as a number (0-11)
// getDate()	        Get the day as a number (1-31)
// getHours()	        Get the hour (0-23)
// getMinutes()	        Get the minute (0-59)
// getSeconds()	        Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	        Get the time (milliseconds since January 1, 1970)
// getDay()	            Get the weekday as a number (0-6)
// Date.now()	        Get the time. ECMAScript 5.

//The getTime() method returns the number of milliseconds since January 1, 1970
console.log("Get Time: ",new Date().getTime())

//The getFullYear() method returns the year of a date as a four digit number:
console.log("Get Year: ",new Date().getFullYear())

//The getMonth() method returns the month of a date as a number (0-11):
console.log("Get Month: ",new Date().getMonth())

//ou can use an array of names, and getMonth() to return the month as a name:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("Month: ",months[new Date().getMonth()])

//The getDate() method returns the day of a date as a number (1-31):
console.log("Get Date: ",new Date().getDate())

//The getHours() method returns the hours of a date as a number (0-23):
console.log("Get Hours: ",new Date().getHours())

//The getMinutes() method returns the minutes of a date as a number (0-59):
console.log("Get Minutes: ",new Date().getMinutes())

//The getSeconds() method returns the seconds of a date as a number (0-59):
console.log("Get Secs: ",new Date().getSeconds())

//The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
console.log("Get MilliSecs: ",new Date().getMilliseconds())

//The getDay() method returns the weekday of a date as a number (0-6):
console.log("Get Day: ",new Date().getDay())

//You can use an array of names, and getDay() to return the weekday as a name:
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Day: ",days[new Date().getDay()])


// UTC Date Methods
// UTC date methods are used for working with UTC dates (Universal Time Zone dates):

// Method	                Description
// getUTCDate()	            Same as getDate(), but returns the UTC date
// getUTCDay()	            Same as getDay(), but returns the UTC day
// getUTCFullYear()	        Same as getFullYear(), but returns the UTC year
// getUTCHours()	        Same as getHours(), but returns the UTC hour
// getUTCMilliseconds()	    Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes()	        Same as getMinutes(), but returns the UTC minutes
// getUTCMonth()	        Same as getMonth(), but returns the UTC month
// getUTCSeconds()	        Same as getSeconds(), but returns the UTC seconds

console.log("Get Utc Date: ",new Date().getUTCDate())