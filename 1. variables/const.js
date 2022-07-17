// The const keyword was introduced in ES6 (2015).

// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.

const _id = 617
// const _id = 799 //Error coz we can't redeclare
console.log(_id)

// _id = 799
// console.log(_id) //Error
//TypeError: Assignment to constant variable

{
    const _name = 'surya'
    console.log(_name)
}
// console.log(_name) //Error coz const have block scope
//Ref error: _name is not defined