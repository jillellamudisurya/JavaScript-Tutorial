//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

console.log(Math.random())

//Math.random() always returns a number lower than 1.
//Math.random() used with Math.floor() can be used to return random integers.
console.log(Math.floor(Math.random()*10))

//A Proper Random Function
function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(getRandomInteger(2,100))

//This JavaScript function always returns a random number between min and max (both included)