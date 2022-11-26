const gameControls = document.getElementById('controls')
const score = document.getElementById('score')
const startButton = document.querySelector('.start-game')
const prompt = document.getElementById("prompt");
const msg = document.getElementById("msg");

// GAME PHASES
const PLAYING = 'PLAYING'
const GAME_OVER = 'GAME_OVER'
const NEW = 'NEW'

// DIRECTIONS
const LEFT = 'LEFT'
const RIGHT = 'RIGHT'
const UP = 'UP'
const DOWN = 'DOWN'

let gameState = {}

function newBoard() {
    return [
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '', '', '', '', '',]
    ]
}

function resetInitialState() {
    gameState.board = newBoard()
    gameState.apple = [5, 5]
    gameState.snake = {
        body: [[10, 5], [10, 6], [10, 7], [10, 8]],
        // direction is going to be based off of 3 values
        // 1 === increment
        // 0 == staying the same
        // -1 === decrement
        nextDirection: [0, -1] // the snake is staying in the same row but moving to the left (changing columns)
        //[row, col]
    }
    gameState.speed = 300
    gameState.phase = NEW
    gameState.interval = null
    gameState.count = 0;
    playAgainFunc(); 
    updateHTMLBoard();
}

function moveSnake() {

    const [y, x] = gameState.snake.body[0] // head of the snake i.e. [10,5]
    const segmentForMove = [y + gameState.snake.nextDirection[0], x + gameState.snake.nextDirection[1]] // i.e [10,4]
    const [segY, segX] = segmentForMove // just turning them into coordinates

    // [y,x] is what segment for move is 
    if (segmentForMove[0] > 11 || segmentForMove[0] < 0 || segmentForMove[1] > 11 || segmentForMove[1] < 0) {
        changePhaseTo(GAME_OVER)
        // this will check if next cell is out of bounds!
    }
    else if (gameState.board[segY][segX] === 'snake') {
        // gameStateboard[y][x]
        // this checks if snake touches itself
        changePhaseTo(GAME_OVER)
    }
    else {
        //body: [[10, 5], [10, 6], [10, 7], [10, 8]], length of 4
        if(gameState.board[segY][segX] == 'apple') {  // check on why segmentForMove === gameState.apple didnt work
           
            gameState.count++;
           if(gameState.count >= 10){
               msg.style.display = "block";
               changePhaseTo(GAME_OVER)
           }
            score.innerHTML = "Score " + gameState.count;
            moveApple()
            
            
             //body: [[10,4],[10, 5], [10, 6], [10, 7], [10, 8]], -- after unshift; length of 5
        }
        else {
            gameState.snake.body.pop() // this removes the tail
            //body: [[10, 5], [10, 6], [10, 7]], -- after pop; length of 3
            //body: [[10,4],[10, 5], [10, 6], [10, 7]], 00 after unshift; length of 4
        }

        gameState.snake.body.unshift(segmentForMove) // this adds to the head
        
    }
    gameState.board = newBoard() 
    addSnakeToBoard() // update JS board
    addAppleToBoard() // update apple

}

function tick() {
    //functions to come
    clearHTMLboard()
    moveSnake()
    updateHTMLBoard()
}

let playAgain = document.getElementById("playAgain");
function changePhaseTo(phase) {
    gameState.phase = phase

    if (gameState.phase === PLAYING) {
        gameState.interval = setInterval(tick, gameState.speed)
        prompt.style.display = "none";
    }
    else if (gameState.phase === GAME_OVER) {
        clearInterval(gameState.interval)
        playAgain.style.display = "block";
    }

}

playAgain.addEventListener('click', resetInitialState);

function playAgainFunc() {
    let arr = document.getElementsByClassName("cell");
    for (let i = 0; i < arr.length; i++) {
        arr[i].className = "cell";
    }
    playAgain.style.display = "none";
    gameControls.style.display = "none";
    score.style.display = "none";
    prompt.style.display = "block";
    msg.style.display = "none";
    addSnakeToBoard();
    addAppleToBoard();
}

function addAppleToBoard() {
    const [y, x] = gameState.apple
    gameState.board[y][x] = 'apple'
}

function addSnakeToBoard() {
    for (let i = 0; i < gameState.snake.body.length; i++) {
        const [y, x] = gameState.snake.body[i]
        gameState.board[y][x] = 'snake';
    }
}

function getRandomBoardIndex() {
    return Math.floor(Math.random() * 12)
}

function moveApple() {
    let y = getRandomBoardIndex()
    let x = getRandomBoardIndex()

    gameState.apple = [y, x]
}

function clearHTMLboard() {
    const appleElem = document.getElementsByClassName('apple')[0]
    const snakeElem = document.getElementsByClassName('snake')

    appleElem.classList.remove('apple')

    for (let i = 0; i < snakeElem.length; i++) {
        snakeElem[i].classList.remove('snake')
    }
}

function updateHTMLBoard() {

    let appleCell = document.querySelector("div[data-coordinates='" + gameState.apple + "']")
    appleCell.classList.add('apple')

    // console.log(gameState.board)
    for (let i = 0; i < gameState.snake.body.length; i++) {
        const [y, x] = gameState.snake.body[i]
        let snakeCell = document.querySelector("div[data-coordinates='" + y + ',' + x + "']")
        snakeCell.classList.add('snake')
    }

}

function turnSnake(direction) {
    // use this function to update nextDirection
    if (direction === LEFT) gameState.snake.nextDirection = [0, -1];
    else if (direction === RIGHT) gameState.snake.nextDirection = [0, 1];
    else if (direction === UP) gameState.snake.nextDirection = [-1, 0];
    else if (direction === DOWN) gameState.snake.nextDirection = [1, 0];
}

document.onkeydown = checkKey;

function checkKey(event) {

    if (event.keyCode == '38') {
        // up arrow
        gameState.snake.nextDirection = [-1, 0]
    }
    else if (event.keyCode == '40') {
        // down arrow
        gameState.snake.nextDirection = [1, 0]
    }
    else if (event.keyCode == '37') {
       // left arrow
       gameState.snake.nextDirection = [0, -1]
    }
    else if (event.keyCode == '39') {
       // right arrow
       gameState.snake.nextDirection = [0, 1]
    }

    event.preventDefault();

}


startButton.addEventListener('click', function () {
    // change phase
    changePhaseTo(PLAYING)

    // show control buttons
    gameControls.style.display = 'grid'
    score.style.display = 'block'
    score.innerHTML = "Score " + gameState.count;
    // board is updating
})

gameControls.addEventListener('click', function (event) {
    if (event.target.tagName !== 'BUTTON') {
        return
    }

    // use event.target.innerText to determine left right up or down
    let direction = event.target.innerText.toUpperCase();
    turnSnake(direction)

})





resetInitialState();


// when the game starts and moves
// it needs to update both boards
