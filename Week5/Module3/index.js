let cities = ['NYC', 'Boston', 'Chicago', 'Miami']
console.log(cities.indexOf('Chicago'))

// built in array method

// Just like Arrays.. Objects have built in methods
// Creating and Calling methods in objects
let graceHopper = {
    first: 'Grace',
    last: 'Hopper',
    rank: 'Admiral',
    printGrace: function(){
        // this is called an anonymous function!
        console.log('Hey Im Grace!')
    }
}

graceHopper.printGrace()

// add functions to the object like adding any other piece of data or properties
// and they can have parameters
graceHopper.printNumber = function(num){ // still using anonymous functions
    console.log('You gave Grace the number', num)
}

console.log(graceHopper)

graceHopper.printNumber(8)

let graceKeys = Object.keys(graceHopper)
// what happens if you print the values of each
for(let i = 0; i < graceKeys.length; i++){
    console.log(graceHopper[graceKeys[i]])
}

//changed from a console.log to a return
graceHopper.printNumber = function(num){
    return 'You gave Grace the number ' + num
}

console.log(graceHopper.printNumber(18))


// The this keyword in object methods
// this refers to the object or block of code it is living in
let petOne = {
    name:'Lola',
    favFood: 'beef gravy',
    age: 2,
    sayHi: function(){
        console.log('Hi my name is', this.name, 'and i am', this.age, 'years old')
    }
}

petOne.sayHi()
console.log(this) // refer to index.js as a whole in VS Code
function testThis(){
    console.log('What is this?:', this) // refers to the funciton Object
}

testThis()

petOne.whatIsThis = function(){
    console.log(this)
}

petOne.whatIsThis()


// Another example

let calc = {
    num1: 20,
    num2: 30,
    sum: function(){
        let sumVariable = 'this is a test'
        return this.num1 + this.num2
    },
    subtraction: function(){
        console.log(sumVariable) // testing scope! sumVariable is local to the sum function
        return this.num1 - this.num2
    }
}

console.log(calc.sum())
calc.num2 = 15
console.log(calc.subtraction()) // this will refer to the updated object at all times