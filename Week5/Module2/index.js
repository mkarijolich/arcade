/* OBJECTS */

// What is an object?
// collection of key value pairs
// objects are used to store values .. like arrays but a little different

let myArray = ['value1', 'value2']

let myObject = {
    'key1': 'value1',
    'key2': 'value2'
}

// console.log(myArray[0]) // accessor in arrays
// console.log(myObject['key1']) //accessor in Objects
// console.log(myObject.key1) // also an accessor in Objects

// an instance where you want to use [] notation instead of . notation for objects

let anotherObject = {
    'key One': 'value 1',
    'key-two': 'value 2'
    // key One has a space.. so you would need to use [] to put in the full string
    // key-two has a dash.. so you would need to use [] to put in the full string
}

// console.log(anotherObject['key One'])

// Example 1 -- Array vs Object

// Lets represent Garfield the Cat
// We want to store his name, age and color

let garfieldArray = ['Garfield', 7, 'tabby']

// Why would an object be better?
// So you can know the significance of the data stored

let garfieldObject = {
    name: 'Garfield',
    age: 7,
    color: 'tabby'
}

// console.log(garfieldObject)
// console.log(garfieldObject.age) // logs 7
// console.log(Object.keys(garfieldObject)) // method to access object keys

//reassign Object values
garfieldObject.age = 27
// console.log(garfieldObject.age)

// What is the type of an object?
// console.log(typeof garfieldObject)
// console.log(typeof {})

// Examples of Accessing Values

// let gabbyObject = {
//     name: 'Gabby',
//     'Favorite Color': 'blue',
//     state: 'New York'
// }

let getColor = 'Favorite Color'

// console.log(gabbyObject[getColor]) // here the variable is used to pass the value of Favorite Color as the key
// //bracket [] notation is more like passing in a value
// console.log(gabbyObject.getColor) // . notation will not work because it is looking for EXACT key names

// console.log(gabbyObject['sta' + 'te']) // this will work too with bracket notation

// Example Object

let uicCohort = {
    student1: 'Chris A',
    student2: 'Darshan',
    student3: 'Josh',
    student4: 'Jaeden',
    student5: 'Maki',
    student6: 'Chris',
    student7: 'Josh N'
}

for (let i = 1; i < 8; i++) {
    // console.log(uicCohort['student'+i])
}

// reassigning values example
// let gabbyObject = {
//     name: 'Gabby',
//     'Favorite Color': 'blue',
//     state: 'New York',
//     age: 27
// }

// these two reassign to the same value
// gabbyObject.age++
// gabbyObject.age = 28

// How do we delete values?
// use the delete keyword and key you want to delete
// delete gabbyObject['Favorite Color']
// console.log(gabbyObject)

// How can we add values
// gabbyObject.job = 'Instructor at Fullstack'
// console.log(gabbyObject)

// the In operator
// is used to check if a key exists in an object
// console.log('Favorite Color' in gabbyObject)
// console.log('name' in gabbyObject)

// // loop to see keys
// for (let key in gabbyObject) { // key is like your i
//     // console.log(key)
// }

// // loop to see values
// for (let key in gabbyObject) { // key is like your i
//     // console.log('Gabbys', key, 'is', gabbyObject[key])
// }


// Nested Arrays & Objects in Objects

let gabbyObject = {
    name: 'Gabby',
    state: 'New York',
    age: 27,
    jobs: ['Instructor at Fullstack', 'Website Designer', 'PM at Microsoft'],
    dogs: {
        dog1: 'Lola',
        dog2: 'Nico'
    }
}

// accessing values in a nested array
console.log(gabbyObject.jobs[0]) // logs Intructor at Fullstack
console.log(gabbyObject.jobs)

//accessing values in an nested object
console.log(gabbyObject.dogs)
// these two do the exact same thing
console.log(gabbyObject.dogs.dog2)
console.log(gabbyObject['dogs'].dog2)

// looping thru nested array
for(let i = 0; i < gabbyObject.jobs.length; i++){
    console.log(gabbyObject.jobs[i])
}

// looping thru nested object
for(let key in gabbyObject.dogs){
    console.log(gabbyObject.dogs[key])
}