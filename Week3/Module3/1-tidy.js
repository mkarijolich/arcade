// workshop: https://learn.fullstackacademy.com/workshop/609b2529b4a8360004b121f8/content/609b2529b4a8360004b12207/text

// Questions:
// Why is tidy/clean code important?
// Easier to read
// Easier to debug
// Easier to pair program

// INDENTATION

function itsAFunction() {
    // indent one level inside every code block
    if (true) {
        console.log('we are in a function')
    }
    // doesnt belong to the first if.. so it is indented according to the function
    if (true) { 
        console.log('still here')
    }
}

itsAFunction()


// NAMING CONVENTIONS

// - functions and variables do not start with a capital letter
// - name must begin with a letter (sometimes you can start with _ or $)
// - NO SPACES ALLOWED IN NAMES!
// - camelCase -- WHAT WE WILL DO IN CLASS i.e. itsAFunction
// - snake_case -- its_a_function
// - kebab-case -- its-a-function (this is not allowed in JS)

let myFavoritePlace = 'Fullstack' // use camelCase

// DONT use ambiguous variable names
let x = 68 // what is ?

function addTwoNumbers(a,b) // try to make it make sense
function addTwoNumbers(num1,num2)

// ambiguous/short variable names are good for counters, i.e loops! 
