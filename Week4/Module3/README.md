# Module 3 - JavaScript: Array II


# YouTube upload:
[📺 YouTube Lecture Link (TODO)]()

### Preface
- Transcript on YT?
- [Article on computational thinking](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/)
- [Coderbyte challenges](https://coderbyte.com/)
- Know how to debug/run node and JS programs locally?

### Arrays, continued

#### Review:
- How to remove:
  - First element?
  - Last element?

- To remove a section: `.splice(startIndex, count)`
  - `startIndex` is the start index from which to start splicing
  - `count` is number of elements to splice
```js
array = [0, 1, 2, 3, 4]
let newSplice = array.splice(2, 2)
console.log(array) // => [0, 1, 4]
console.log(newSplice) // => [2, 3]
```

- To replace elements: `.splice(startIndex, count, elements)`
```js
array = [0, 1, 2, 3, 4]
let newSplice = array.splice(2, 1, 'a', 'b')
console.log(array) // => [0, 1, 'a', 'b', 3, 4]
console.log(newSplice) // => [2]
```
*You can put `0` for count, if you don't want to remove ANY elements and just want to insert new ones.
```js
array = [0, 1, 2, 3, 4]
let newSplice = array.splice(2, 0, 'a', 'b')
console.log(array) // => [0, 1, 'a', 'b', 2, 3, 4]
console.log(newSplice) // => []
```

- To join the elements all together into a string: `.join()` or `.join(stringParam)`
  - `.join()` will join them with comma, no space (see this in a lot of CSV sheets)
  - `.join(stringParam)` will join with the `stringParam` you specify. E.g.:

```js
let name = ['John', 'Jacob', 'Jingleheimer', 'Schmidt']

// separated by a comma (no space)
console.log(name.join());
// => John,Jacob,Jingleheimer,Schmidt

// separated by a space
console.log(name.join(' '));
// => John Jacob Jingleheimer Schmidt

// separated by nothing
console.log(name.join(''));
// => JohnJacobJingleheimerSchmidt
```

- To concatenate arrays: `.concat(secondArray)`
```js
let firstArray = [0, 1]
let secondArray = [2, 3]
let newArray = firstArray.concat(secondArray);
// => [0, 1, 2, 3]
```

### Nested arrays
```js
array = [
  ['0,0', '0,1', '0,2'],
  ['1,0', '1,1', '1,2'],
  ['2,0', '2,1', '2,2']
]

// array[row][col]
array[0][0] // '0,0'
array[1][2] // '1,2'
array[2][2] // '2,2'

let ticTacToe = [
  ['X', 'O', 'X'],
  [' ', 'X', 'O'],
  ['O', ' ', ' ']
]

ticTacToe[0][0] // 'X'
ticTacToe[1][2] // 'O'
ticTacToe[2][2] // ' '

// Help player X win on the diagonal!
ticTacToe[2][2] = 'X'
/*
[
  ['X', 'O', 'X'],
  [' ', 'X', 'O'],
  ['O', ' ', 'X']
]
*/
```

#### What tools do we have to:
- determine if a number is even or odd?
  - `# % 2 == 0` or `# % 2 != 0`

- check every element of an array?
```js
//for (initial; condition; step)
for(let i = 0; i < array.length; i++) {
  ...
  console.log(array[i])
  ...
}
```

- keep track # of times an element shows up somewhere?
  - iterate: `for` loop
  - check if equal: conditional `if (x ==y)`
  - track: increment var, `count++` or `count += 1`
    - declare var outside, reassign/increment count in loop in conditional
```js
//how many times does 'a' show up in array?
let array = ['a', 'x', 'a', 'y', 'a']
let count = 0;
for(let i = 0; i < array.length; i++) {
  if (array[i] === 'a') {
    count += 1;
  }
}
console.log(count);
```
