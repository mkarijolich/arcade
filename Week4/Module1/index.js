/* 
Overview for the night

Coercion in JS

Explicit

Implicit

Coercion with booleans */


// Explicit Coercion

// Coercion occurs when the type of a value is changed to a new type

// Explicit coercion happens when we use on of the built in objects used to create values

let num = 10
console.log(typeof num)

let string = String(num)
console.log(string)
console.log(typeof string)

console.log(typeof num)


let anotherString = '1000'
console.log(typeof anotherString)

let anotherNum = Number(anotherString)
console.log(anotherNum)
console.log(typeof num)

// IMPLICIT COERCION
// this also changes the type of a value, but more so behind the scenes (as in JS does it for us)

let sum = 10 + 20

let newString = '10' + '20'

let specialString = 10 + '20' // this is where implicit coercion will happen -- t

console.log('this is sum: ', sum) //expecting -- this is sum: 30
console.log('this is newString: ', newString) //expecting -- this is newString: 1020
console.log('this is specialString: ', specialString) // we dont know what to expect?

console.log('25' - 5)

// + will change number to string
// - will change string to number

// console.log("complicated example, ", 10 + '20' + 36 + '88') // this will output one string

// Implicit with ==

// avoid using the == operator because it has rules that can lead to implicit coercion

console.log(10 == 10) // give us true
console.log(10 == '10') // implicit coercion happens , either way 10 == 10
console.log('true' == true) //implicit coercion happens , we are gonna get false
// the string 'true' converts to 116 114 117 101
// the boolean true converts to 1

console.log('' == false) // true, because an empty string is a falsey value
console.log(true == 1) // true, because the boolean true is equal to 1


//TRUTHINESS & BOOLEAN COERCION

let  newBool = Boolean('i am a string')
// console.log(newBool) // true because its not falsey 

// when coercing a value to a boolean, JS will try to decide if it should be true or false
// values that would be coerced to true are known as "truthy"
// values that would be coerced to false arfe known as "falsey"

// Any value that is not falsey is truthy!! The following would be true:
Boolean('i am a string')
Boolean(10)
Boolean(['i', 'am', 'an', 'array'])
Boolean({i:'am', an: 'object'})

// ANYTHING WITH VALUE IS TRUTHY

// Any value of no value is falsey
Boolean('')
Boolean(0)
Boolean(NaN)
Boolean(null)
Boolean(undefined)

//Coercion in conditionals
if(5>0){
    console.log('in the if')
}
else{
    console.log('in the else')
}


if('apples'){
    console.log('in the if') //this is gonna run
}
else{
    console.log('in the else')
}


if(10){
    console.log('in the if') //this is gonna run
}
else{
    console.log('in the else')
}

if(0){
    console.log('in the if') 
}
else{
    console.log('in the else') //this is gonna run
}

// THE ! OPERATOR
console.log(true)
console.log(!true) // this is false

console.log(!100) // this is false
console.log(!'abc') // this is false

// THE !! OPERATOR
// You can use !! to explicity coerce a value to a boolean value that reflects truthiness
// Opposite of the ! operator
// console.log(!!true)

// LOGICAL OPERATORS

if(10 && 20){
    console.log('is this running?') // this would run
}else{
    console.log("i guess not")
}

if(10 || 0){
    console.log('is this running?') // this would run
}else{
    console.log("i guess not")
}

if(10 && 0){
    console.log('is this running?') 
}else{
    console.log("i guess not") // this would run
}


let value1 = 10 && 'apples' && 0 && null 
console.log(value1) // return the FIRST falsey value if it is false
// returned: 0

let value2 = 'lucky' && 'number' && 7
console.log(value2) // return the LAST true value if all are true
// returned: 7

let value3 = null || undefined || 'happy' || 'pumpkin'
console.log(value3) // return the FIRST true value
// returned: happy

let value4 = null || undefined || 10 < 0 || NaN
console.log(value4) // return the LAST for false
// return NaN