/* 

Group Questions 

1. What is programming? 
    - If you give an input you will get an output
    - Programming is used to express the behavior of a website
    - Deciding how you want a user to interact with a website
    - The process of building executables
2. What programming languages do you know or have heard of?
    - C#, F#
    - Java
    - JavaScript
    - Python
    - Ruby
    - Cobalt
    - Fortran
3. How can Pseudocode be helpful?
    - Interviews
    - Code Planning
4. Debugging
    - What is a bug? An error or mistake or missing functionality That stops your code from working properly

*/

// TOPICS

// Using the Console - used to interact with JS code or write JS directly in browser consoles

/* Commenting Code 
    - Helps remind you of what your code does
    - Good to explain your code to another developer
    - Save a piece of nonworking code
    - VS Code Shortcut: CMD/CTRL + /
*/



// DATA TYPES

// - Boolean
true
false
0
1

// - Objects: collections of data
{ // curly braces signify object
    // objects are made of key:value pairs
    name: 'Gabby';
    age: 27;
    likesDogs: true;

}

//  - Null & Undefined: these are used to show that there is an absence of a value
null
undefined

// - Numbers: signify values
12
7
0
1

// - Strings
"hello"
"hi, Im Gabby"

// - Operations/Operators: used on values
1 + 1
1 - 1
1 * 1
1/1
"hello".length //literally tells you about many letters are in the string
""  // used to signify strings
'' // used to signify strings


// PRINTING TO THE CONSOLE
console.log(1+1)
console.log("hello".length)
console.log({ 
    name: 'Gabby',
    age: 27,
    likesDogs: true,

})
console.log(true)
console.log(1)

// VARIABLES - something you assign to a value
/*
- names/naming structure for a data type value
- they cannot have any spaces
- they have to begin with a letter, underscore or $
- they are case sensitive
- different types of variables
    - var: which stands for variable. it can be redeclared and reassigned
    - let: it can be reassigned but not redeclared 
    - const: stands for constant. cannot be redeclared or reassigned
    (IN THE CLASS USE LET OR CONST)
*/

let firstName = 'Gabby'; // this is a variable declaration
// let name = 'Paul' --> this is a redeclaration
firstName = 'John'; // this is a reassignment

const colorOfSky = 'blue';

// Class examples
const cohortName = '2108-UIC-WEB-PT'
let classSize = 12
classSize = 7

// uses combinations to create variables
let newClassSize = 12 - 3; // equals 9

const numberOfDaysMet = 3;
let topicOfWeek = 'HTML/CSS'
topicOfWeek = 'JavaScript'

// Object example
let cohortTeacher = {
    name: 'Gabby',
    age: 27,
    likesDogs: true
}

console.log(classSize)
console.log(cohortTeacher)
console.log(classSize + 3)
console.log(newClassSize)

// Combining Different Data Types
console.log(cohortName + classSize) // resulted in a string
console.log(cohortName + " " + classSize) // strings can have spaces

// ERRORS

// - Syntax errors
// ex. console.log("hello guyyyysss" 
// Youll get an error message and line number of error

// - Reference errors
// console.log(kittenName) --> kittenName is not defined
// Youll get an error message and line number of error
