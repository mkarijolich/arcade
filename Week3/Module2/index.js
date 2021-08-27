/* CONTROL FLOW */
// If this then that

/* BOOLEANS + CONDITIONAL */
let isItSunny = true;
console.log(isItSunny)
console.log(typeof isItSunny)


let isItSunny = false
if(isItSunny){ // it is checking if the expression is true or false
    console.log("Lets go to the beach")
}
else { // do not use or check expressions. they are the otherwise option
    console.log("Stay inside!")
}

// Comparison operators
let a = 5
let b = 7

// a === b : is equal to ?
// a !== b : is not equal to?
// a > b : greater than?
// a >= b: greater than or equal to?
// a < b: less than?
// a <= b: less than or equal to?

console.log(a <= b) // this is true

// a = 5 and b = 7
if(a > b){
    console.log("JavaScript is fun")
}
else {
    console.log("JavaScript is still fun")
}

// else if
a = 7; // b is still 7
if(a > b){
    console.log(" We are the coolest cohort")
}
else if(a === b){
    console.log("Still the coolest")
}
else {
    console.log("best developers ever")
}

// you can have as many else ifs as you would like
// there are scenarios where only an if is needed

// another way to do control flow -- only use if statements. both are valid

if(a > b){
    console.log(" We are the coolest cohort")
}
if(a === b){
    console.log("Still the coolest")
}
else {
    console.log("best developers ever")
}

// LOGICAL OPERATORS
// AND - &&
// OR - ||
// NOT - !

let pretzelsInStock = true;
let amountOfMoney = 1.00

// &&
if( (pretzelsInStock) && (amountOfMoney >= 1.50)){ //pretzel price is $1.50
    // using the && operator BOTH statements have to be true in order for this to run
    console.log('Buy the pretzel')
}
else {
    console.log('No pretzel for you')
}

// ||

let rainy = false
let excitingMovieOut = true
let moneyIHave = 1.00

if(rainy || excitingMovieOut)
{
    // when using ||, only one statement has to be true
    console.log('Go to the movies')
}
else {
    console.log('Go to the park')
}

// combining statements
// if( (rainy && moneyIHave > 2.00) || (excitingMovieOut && moneyIHave > 2.00))
// {
//     // when using ||, only one statement has to be true
//     console.log('Go to the movies')
// }
// else {
//     console.log('Go to the park')
// }

// !
let rainy = false; //--> its not raining

//!rainy --> it is raining

rainy = undefined;
console.log(!rainy)

if(!rainy){
    console.log("Go to the movies")
}
else{
    console.log("Go to the park")
}

// Truthy vs Falsey
// 0 is false
// 1 is true.. so is anything greater than 0

//Falsey values
// false
// 0
// '' --> not a space
// null
// undefined
// Na

// Examples

let iDontKnow = undefined // false
let number = 0 // false
let anotherNum = 3 // true
let lastNum = number + anotherNum //true
let aString = '' //false
let anotherString = 'something something' // true

if(number-anotherNum){ // 0 -3 = -3
    console.log("its true")
}
else {
    console.log("its false")
}
// negative numbers are still a value so they are true!


// FUNCTIONS
// when called it runs code inside of it
// takes an input and gives an output
// meant to perform a specific functionality or operation for your application

let snake = "Harry"
let dog = "Lola"
let bunny = "Bugs"

console.log(snake + " the Magnificent")
console.log(dog + " the Magnificent")
console.log(bunny + " the Magnificent")

// when repeating code.. you may want to use a function

// Function Skeleton
function functionName(param1, param2, param3){ // writing a function you should have function keyword, function name, (), {}

}

functionName("example 1", "example 2", "example 3") //passing in multiple arguments

// parameter is a placeholder for a value -- think of it as a variable tied to the function
// you can have as many parameters as you want and access themin the function

function theMagnificent(animalName){ // FUNCTION DECLARATION
    console.log(animalName + " the Magnificent")
}

theMagnificent(snake) // FUNCTION CALL OR INVOKATION
// a function will NOT run unless it is invoked
// you can call a function as many times as you want
theMagnificent(bunny) // the values you pass into a parameter are called arguments
theMagnificent("Ozwald")
theMagnificent(dog, snake)

// paramter example
function notEnoughValues(param1,param2){
    console.log("printing the first number:  " + param1)
    console.log("printing the second number: " + param2)
}

// notEnoughValues(7) // didnt pass in the number of arguments expected

// the difference between return and console.log

function findTheSum(num1, num2){
    return num1 + num2
}

findTheSum(18,33)

let myFavoriteNumber = findTheSum(10,65)
console.log("My Favorite Number is " + myFavoriteNumber)


function progressReport(name, grade1, grade2, grade3){ // this function is just to print a progress report
    let studentAverage = calculateAverage(grade1,grade2,grade3)
    console.log(name + ' has a grade average of ' + studentAverage)
}

function calculateAverage(x, y, z){ // this function is just to calculate the average
    return (x+y+z)/3 // --> return statements mean the end of a function!
    // return should always be the last thing you wanna do
}

progressReport("Charlie", 88, 90, 65)

// several return example

function determinePathBasedOnNumbers(a, b){
    if (a > b) {
        return "go to sleep"
    }
    if (a === b) {
        return "do a dance"
    }
    else {
        return "do 50 jumpjacks"
    }
}

let whatShouldIDo = determinePathBasedOnNumbers(5,7);