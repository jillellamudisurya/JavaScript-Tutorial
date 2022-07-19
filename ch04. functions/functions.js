// A JavaScript function is executed when "something" invokes it (calls it).
//With the help of functions we can able to reuse the code as many 
//times as possible.
function add(a,b){
    return a+b;
}
console.log(add(1,2))

// A JavaScript function is defined with the function keyword, 
// followed by a name, followed by parentheses ().

// function name(param1,param2,...){
//     //function code
// }

//TODO: Function Invocation
// The code inside the function will execute when "something" invokes (calls) the function:

// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)

// Function Return
// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":

function myName(){
    console.log('surya')
}
myName();