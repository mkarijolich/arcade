/* REVIEW ON VARIABLES */

// var
// - Can be redecleared
// - Can be reassigned
// - function scoped -- You will understand very soon

var variableOne = 'a string'
var variableOne = 'a different string' //can be redeclared
variableOne = 0


// let
// - cannot be redeclared
// - can be reassigned
// - block scoped -- You will understand very soon

let variableTwo = 'a different string'
variableTwo = 9


// const
// - cannot be redeclared
// - cannot be reassigned
// - block scoped -- You will understand very soon

const variableThree = 'a never changing string'


/* SCOPE */
// What is scope?
// What part of the code can access a variable
// global can be used everywhere

/*GLOBAL SCOPE */

let global = 'ear' // global variables can be accesses ANYWHERE IN THE CODE
// They are not declared in a function or block of code!

// console.log('outer', global)

function seeGlobal(){
    // console.log('inner', global)
}

seeGlobal()

// though a global variable can be accessed anywhere, it still has to be declared before it is used

// console.log(whatsGonnaHappen) // cannot be accessed before it is created
let whatsGonnaHappen = 682632

/* FUNCTION SCOPE */
// variables declared inside of a function are locally scoped to that function
// they cannot be referenced outside of the function

function itsLocal(){
    let message = 'i am local local' // function scoped and cannot be accessed outside of this function
    // console.log(message)
}

itsLocal()
// console.log(message) // this will cause an error


// Trick question
// what happens if a local and global variable have the same name?

let number = 12

function printNumber(){
    let number = 18

    // console.log(number) // JavaScript will look for a variable locally first ; this prints 18
}

printNumber()
// console.log(number) // prints 12 because it cannot access the number variable made inside of the printNumber function

//Another tricky example

let message = 'just doing my thing'

function printMessage(message){ //parameters are local variables to functions
    // console.log(message) // gonna print 'im doing a different thing'
}

printMessage('im doing a different thing')

// A third tricky example

let thisCanGetTricky = 'global'
let globalVariable = 0

function printTricky(thisCanGetTricky){ //equals outer

    let localToPrintTricky = 1

    function innerPrintTricky(){ // this function is locally scoped!
        let thisCanGetTricky = 'inner' //cant be accessed outside of this function
        // console.log(thisCanGetTricky) // prints'inner'

        // anything created
        // console.log(localToPrintTricky)
        // console.log(globalVariable)
    }

    innerPrintTricky()
    // console.log(thisCanGetTricky) // prints 'outer'
}

printTricky('outer')
// console.log(thisCanGetTricky) // print 'global'

/*BLOCK SCOPE */

if(true){
    let block = 'Jenny from the'
    // as long as a let or const variable is declared inside of a block of code '{}' it can only be accessed in that block
    console.log(block, 'block')
}

// console.log('does this work?:', block)

if(true){
    var anotherNumber = 91749 // because this is var.. it is not going to be stopped by scope
    // anotherNumber created as a var in a BLOCK of code is considered to be global
    // if there is no function keyword a var variable is global
    console.log('number in the if ', anotherNumber)
}

console.log('number outside the if', anotherNumber)

// ALL IN ALL DONT USE VAR !

/* BEST PRACTICES */

let aGlobalVariable = true

function dontMindMe(){
    // YOU SHOULDNT CHANGE GLOBAL VARIABLES INSIDE OF A FUNCTION
    aGlobalVariable = false // this is bad -- this is reassigning

    // you can give it a local copy
    let aGlobalVariable  = false
}

dontMindMe()

if(aGlobalVariable){
    console.log('this should be running cause its true')
}
else {
    console.log('something is broken')
}

// avoid using too many global variables
/* it is safer to declare variables in a function or in code blocks so you dont overwrite variables accidentally
or access the wrong variable by mistake */