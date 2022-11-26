let gameState = {};

let htmlBoard = document.getElementById('board');
let showText = document.getElementById('showText');
let playAgain = document.getElementById('playAgain');
let displayX = document.getElementById('displayX');
let displayO = document.getElementById('displayO');
let msg = document.getElementById('msg');
let player1NameInput = document.getElementById('player1Name');
let player1Name = "player1Name";
let displayPlayer1Name = document.getElementById('displayPlayer1Name');
let player2NameInput = document.getElementById('player2Name');
let player2Name = "player2Name";
let displayPlayer2Name = document.getElementById('displayPlayer2Name');
let submitNameBtn = document.getElementById('submitNameBtn');
let nameEntry = document.getElementById('nameEntry');
let playMsg = document.getElementById('play-msg')


function resetToInitialState() {
    gameState.currentPlayer = 'X';
    gameState.winner = null;
    gameState.turnCount = 0;
    gameState.gameOver = false;
    gameState.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    playAgainFunc();
}
resetToInitialState();


function handleClick(event) {
    if (gameState.gameOver) {
        return;
    }
    const currentCell = event.target;

    if (currentCell.className !== 'cell') {
        return;
    }

    const [y, x] = currentCell.dataset.coordinate.split('.');

    gameState.currentPlayer = getCurrentPlayer();

    gameState.board[y][x] = gameState.currentPlayer;

    updateGameCell(currentCell);
    checkForWinner();

    gameState.turnCount++;

    if (!gameState.gameOver && gameState.turnCount >= 9) { 
        msg.innerHTML = "Draw!";
        showText.style.display = 'block';
    }
}

function getCurrentPlayer() {

    if (gameState.turnCount % 2 === 0) {
        displayX.style.display = 'none';
        displayO.style.display = 'block';
        return "X";
    }
    else {
        displayX.style.display = 'block';
        displayO.style.display = 'none';
        return "O";
    }
}

function updateGameCell(currentCell) {

    currentCell.innerHTML = gameState.currentPlayer;

    if (gameState.currentPlayer == 'X') {
        currentCell.classList.add('styleX');
    }
    else {
        currentCell.classList.add('styleO');
    }
}

function checkForWinner() {
    checkRowWinner();
    checkColumnWinner();
    checkDiagonal();
}

function checkRowWinner() {
    for (let i = 0; i < gameState.board.length; i++) {
        let Xcount = 0;
        let Ocount = 0;

        for (let j = 0; j < gameState.board.length; j++) {
            if (gameState.board[i][j] === "X") {
                Xcount++;
            } else if (gameState.board[i][j] === "O") {
                Ocount++;
            }
        }

        if (Xcount === 3) {
            setWinnerMessage('X');
        }
        else if (Ocount === 3) {
            setWinnerMessage('O');
        }

    }
}


function checkColumnWinner() {
    for (let i = 0; i < gameState.board.length; i++) {
        let Xcount = 0;
        let Ocount = 0;

        for (let j = 0; j < gameState.board.length; j++) {
            if (gameState.board[j][i] === "X") {
                Xcount++;
            } else if (gameState.board[j][i] === "O") {
                Ocount++;
            }
        }

        if (Xcount === 3) {
            setWinnerMessage('X');
        }
        else if (Ocount === 3) {
            setWinnerMessage('O');
        }
    }
}

function checkDiagonal() {
    let Xcount = 0;
    let Ocount = 0;
    for (let i = 0; i < gameState.board.length; i++) {

        if (gameState.board[i][i] === "X") {
            Xcount++;
        }
        else if (gameState.board[i][i] === "O") {
            Ocount++;
        }
        if (Xcount === 3) {
            setWinnerMessage('X');
        }
        else if (Ocount === 3) {
            setWinnerMessage('O');
        }
    }

    Xcount = 0;
    Ocount = 0;

    for (let i = 0; i < gameState.board.length; i++) {

        if (gameState.board[gameState.board.length - 1 - i][i] === "X") {
            Xcount++;
        }
        else if (gameState.board[gameState.board.length - 1 - i][i] === "O") {
            Ocount++;
        }

        if (Xcount === 3) {
            setWinnerMessage('X');
        }
        else if (Ocount === 3) {
            setWinnerMessage('O');
        }
    }
}

function setWinnerMessage(player) {

    msg.innerHTML = player + " wins!";
    showText.style.display = 'block';
    gameState.gameOver = true;
}




function playAgainFunc() {
    let arr = document.getElementsByClassName("cell");
    for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = "";
        arr[i].className = "cell";

        displayX.style.display = 'none';
        displayO.style.display = 'none';

        displayPlayer1Name.innerHTML = "";
        displayPlayer2Name.innerHTML = "";

        nameEntry.style.display = "flex";
        playMsg.style.display = "none";
    }
    showText.style.display = 'none';
}

function getPlayerName(){
    player1Name = player1NameInput.value;
    player2Name = player2NameInput.value;
    
    displayPlayer1Name.innerHTML = player1Name;
    displayPlayer2Name.innerHTML = player2Name;

    nameEntry.style.display = "none";
    playMsg.style.display = "block";

    displayX.style.display = 'block';
    displayO.style.display = 'none';
}



htmlBoard.addEventListener('click', handleClick);
playAgain.addEventListener('click', resetToInitialState);
submitNameBtn.addEventListener('click',getPlayerName);






