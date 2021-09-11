// lets talk arrays

let numbers = [1,2,3,4,5,6,7,8]

// arrays only have bracket notation
// accessing numbers start at 0
// console.log(numbers[2])

numbers.pop() //removing numbers from the end
// think of it like popping the top off
// console.log(numbers)

numbers.push(3) // adding a 3 the right end

numbers.shift() // removes from the beginning
numbers.unshift(0)
// console.log(numbers)


// loop through an array
// print everything in numbers
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i])
}

// nested data in an array

let arrayOne = [
    0, // accessor 0
    {name: 'Tabby', animal: 'Cat'}, // accessor 1
    ['a', 'b', 'c'], // accessor 2
    'Hey everyone!' // accessor 3
]

console.log(arrayOne[2][1])
console.log(arrayOne[1]['animal']) // dot notation would work here