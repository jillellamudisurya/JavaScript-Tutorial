//Let's say Bike is an object,
//Bike has properties like weight, color, size
//and also methods like start, stop, accelerate etc..

//Like in JS, We have objects.
//objects are variables too, but contains many values.
//The values are written in {name:value} pairs

const myObject = {
    name:'surya',
    age:22
}
console.log(myObject)

// It is a common practice to declare objects with the const keyword.

// You create a JavaScript object with an object literal
//objectLiteral: list of name:value pairs separated by comma in curly braces {}

const bike = {
    name:'harley davidson',
    cost:200000,
    color:'black'
}
console.log(bike)

//We Can able to access object properties in 2 ways
//1.objectName.propertyName
//2.objectName['propertyName']
console.log(bike.name);
console.log(bike['name'])

//Object methods
const myName = {
    firstname:'surya',
    lastname:'sj',
    age:22,
    fullname:function(){
        return this.firstname+' '+this.lastname
    }
}
console.log(myName.fullname())
console.log(myName.fullname)
// If you access a method without the () parentheses, it will return the function definition