// Variables defined with let cannot be Redeclared.

// Variables defined with let must be Declared before use.

// Variables defined with let have Block Scope.

let x = 'surya'
// let x = 0 //error
{
    let y = 12
    console.log(y)
}
// console.log(y) //We get error as let contains block scope
//ref error : y is not defined

{
    let x = 24 //Here it is possible at is declaring as another block
    console.log(x)
}

//Block Scope Another example

{
    let _name = 'surya'
    {
        console.log(_name) //Here we get name coz name and 
        //this block is inside same block.
    }
}