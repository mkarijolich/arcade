let letters = 'abcdefg'

// printing out each letter
console.log(letters.length) //this should be 7
console.log(letters[0]) // outputs a -- EVERYTHING STARTS AT THE NUMBER 0
console.log(letters[1])// outputs b
console.log(letters[6]) //outputs g
console.log(letters[7]) //output undefined

// for loop
// initial condition
// conditional statement
// terminating/incrementing change

//printing left to right 
for(let i = 0; i < letters.length; i++){
  // this is the repeating code
  console.log(letters[i])
}

//printing right to left
for(let i = letters.length - 1; i >= 0; i--){
  // this is the repeating code
  console.log(letters[i])
}

//printing half the list
for(let i = 0; i < letters.length/2; i++){
  // this is the repeating code
  console.log(letters[i])
}

//starting at a different place
for(let i = 2; i < letters.length; i++){
  // this is the repeating code
  console.log(letters[i])
}

// skipping values
//starting at a different place
for(let i = 0; i < letters.length; i+=2){ //operator add and reassign .. short hand for i = i + 2 (-= is alsp valid)
  // this is the repeating code
  console.log(letters[i])
}

let numbers = '01234567'
// WHILE LOOP

// initial condition outside of the loop
let j = numbers.length - 1;

// needs a conditional statement
while(j >= 0){
  //repeating code
  console.log(numbers[j])

  j-- // terminating/changing code
}

// counting forward
let i = 0
while(i < numbers.length){
  console.log(numbers[i])

  i++
}

// more flexible example because less strict end case
let k = 'go'
let number = 0

while(k === 'go'){
  console.log(number)
  number++

  if(number > 15){
    k = 'stop'
  }
}


// CONTINUE & BREAK
for(let i = 10; i >= 1; i--){
  console.log("i is: ", i)

  if(i === 7){
    break // break the loop; can be used to terminate for loop early
  }


}

for(let i = 10; i >= 1; i--){
  console.log("i is: ", i)

  if(i === 7){
    i = 5
    continue // continue the loop
  }

  console.log('is this running') // this wont run when i is 7
}