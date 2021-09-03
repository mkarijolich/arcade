# Module 2 - JavaScript: Array I


# YouTube upload:
[📺 YouTube Lecture Link](https://www.youtube.com/watch?v=eRU-MmG8880&list=PLPLveFltzJ38Asv6HPY9Xx_rmRUbtTffV&index=11)

### Array basics

- What's an array?
  - Collection of values, in order
- What is `typeof` [ ] (an array)?
```js
let abc = ['a', 'b', 'c']
typeof(abc)
// => object
```
- If `typeof(array)` outputs `object`, how can we accurately determine whether something is an array or not?
```js
Array.isArray(abc)
// => true
Array.isArray('random string')
// => false
Array.isArray(123)
// => false
```

- How can we determine the length of an array?
  - `array.length`
```js
console.log(abc.length)
// => 3
```

- How can we access elements of the array?
  - Bracket notation
```
let array = ['a', 'b', 'c']
array[0]
// => 'a'
array[1]
// => 'b'
array[2]
// => 'c'
```
  - How could we access the last element of any array, of arbitrary length? (i.e., how can we access last element, if we didn't know exact size ahead of time?)

```js
let size = array.length
array[size - 1]
```

### Modify array

- How can we change the values of elements inside the array?
  - Bracket assignment
```js
array // ['a', 'b', 'c']
array[0] = 'z'
console.log(array)
// => ['z', 'b', 'c']
```

- How can we grow or shrink the array?
    I.e., how can we add or remove elements?

  - Add at the end: `.push(...)`
```js
array = ['a', 'b', 'c']
array.push('d')
console.log(array)
// => ['a', 'b', 'c', 'd']
```
  - Remove from the end: `.pop()`
```js
array = ['a', 'b', 'c']
array.pop()
console.log(array)
// => ['a', 'b', 'c', 'd']
```

  \* `push` and `pop` come from the idea of a stack, like a stack of plates. "Pushing" a new plate puts it on top, i.e. the end of the structure. "pop" takes off the last plate, i.e. the plate at the top of the pile. 

  - Remove from the start: `.shift()`
```js
array = ['a', 'b', 'c']
array.shift()
console.log(array)
// => ['b', 'c']
```

  - Add from the start: `.unshift(...)`
```js
array = ['b', 'c']
array.unshift('a')
console.log(array)
// => ['a', 'b', 'c']
```

### Inspect array

- To find the index of an element in an array: `.indexOf(...)`
```js
array = ['a', 'b', 'c']
array.indexOf('a') // => 0
array.indexOf('b') // => 1
array.indexOf('c') // => 2
/// remember we can also do the same with a string!
let alphabet = 'abcdefgh...'
alphabet.indexOf('a') // => 0
alphabet.indexOf('b') // => 1
...
alphabet.indexOf('m'); // => 12
alphabet.indexOf('n'); // => 13
...
alphabet.indexOf('y') // => 24
alphabet.indexOf('z') // => 25
```

- To return a subsection of an array: `.slice(start, end)`
\*Note: `end` is not included

```js
array = ['a', 'b', 'c', 'd', 'e']
array.slice(0, 2) // => [ 'a', 'b' ]
array.slice(2, 4) // => [ 'c', 'd' ]
array.slice(2, 5) // => [ 'c', 'd', 'e' ]
```

Or, to clarify, we can use numbers as our elements:

```js
array = [0, 1, 2, 3, 4]
array.slice(0, 2) // => [ 0, 1 ]
array.slice(2, 4) // => [ 2, 3 ]
array.slice(2, 5) // => [ 2, 3, 4 ]
```
