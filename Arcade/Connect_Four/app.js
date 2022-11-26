let td = document.getElementsByClassName('td');
let htmlBoard = document.getElementById('htmlBoard');
let player = document.getElementById('player');
let playAgain = document.getElementById('playAgain');
let player1NameInput = document.getElementById('player1Name');
let player1Name = "player1Name";
let displayPlayer1Name = document.getElementById('displayPlayer1Name');
let player2NameInput = document.getElementById('player2Name');
let player2Name = "player2Name";
let displayPlayer2Name = document.getElementById('displayPlayer2Name');
let submitNameBtn = document.getElementById('submitNameBtn');
let nameEntry = document.getElementById('nameEntry');
let playMsg = document.getElementById('play-msg')

const greenColor = '#1697A6';
const yellowColor = '#FFC24B';

const gameState = {};

function resetToInitialState() {
    gameState.currentPlayer = 'green';
    gameState.winner = null;
    gameState.count = 0;
    gameState.gameOver = false;
    gameState.board = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
    ];
    playAgainFunc();
}
resetToInitialState();


function handleClick(event) {
    if (gameState.gameOver === true) {
        return;
    }

    const currentCell = event.target;
    if (currentCell.className !== 'td') {
        return;
    }

    gameState.count++;

    getCurrentPlayer();

    const [y, x] = currentCell.dataset.coordinate.split(',');
    dropPieceIntoColumn(x);

    checkRow();
    checkColumn();
}

function getCurrentPlayer() {
    if (gameState.count % 2 === 0) {
        gameState.currentPlayer = "green";
        player.innerHTML = "Next Player is " +player1Name;
    } else {
        gameState.currentPlayer = "yellow";
        player.innerHTML = "Next Player is " +player2Name;
    }
}

function checkRow() {
    for (let i = 0; i < gameState.board.length; i++) {
        let greenCount = 0;
        let yellowCount = 0;
        for (let j = 0; j < gameState.board[i].length; j++) {
            if (gameState.board[i][j] === "green") {
                greenCount++;
                yellowCount = 0;
            } else if (gameState.board[i][j] === "yellow") {
                yellowCount++;
                greenCount = 0;
            }
            if (greenCount === 4) {
                setWinnerMessage('green');
                playAgain.style.display = "block";
            }
            else if (yellowCount === 4) {
                setWinnerMessage('yellow');
                playAgain.style.display = "block";
            }
        }
    }
}


function checkColumn() {
    for (let i = 0; i < gameState.board[0].length; i++) {
        let greenCount = 0;
        let yellowCount = 0;
        for (let j = 0; j < gameState.board.length; j++) {
            if (gameState.board[j][i] === "green") {
                greenCount++;
                yellowCount = 0;
            } else if (gameState.board[j][i] === "yellow") {
                yellowCount++;
                greenCount = 0;
            }
            if (greenCount === 4) {
                setWinnerMessage('green');
                playAgain.style.display = "block";
            }
            else if (yellowCount === 4) {
                setWinnerMessage('yellow');
                playAgain.style.display = "block";
            }
        }
    }
}

function checkDiagonal() {

}

function setWinnerMessage(playerName) {
    player.innerHTML = playerName + " Wins!";
    player.style.display = 'block';
    gameState.gameOver = true;
}



// Put the game piece into the next free space in the column
function dropPieceIntoColumn(columnNum) {

    // Loop through all rows in this column
    for (let rowNum = gameState.board.length - 1; rowNum >= 0; rowNum--) {

        // If the column is empty
        if (gameState.board[rowNum][columnNum] === '') {

            // Update the javascript gameboard
            gameState.board[rowNum][columnNum] = gameState.currentPlayer;

            // Find and update the HTML game board
            let searchTerm = `td[data-coordinate='${rowNum},${columnNum}']`;
            let cell = document.querySelector(searchTerm);

            if (gameState.board[rowNum][columnNum] === 'green') {
                cell.style.backgroundColor = greenColor;
            }
            else if (gameState.board[rowNum][columnNum] === 'yellow') {
                cell.style.backgroundColor = yellowColor;
            }
            return;
        }
    }
}

function changeHover(event) {
    const currentCell = event.target;
    if (currentCell.className !== 'td') {
        return;
    }

    const [y, x] = currentCell.dataset.coordinate.split(',');

    for (let i = 0; i < gameState.board[0].length; i++) {
        let searchTerm = `td[data-column='${i}']`;
        let cell = document.querySelector(searchTerm);

        if (i == x) {
            cell.style.backgroundColor = 'white';
        } else {
            cell.style.backgroundColor = '#FFF4F1';
        }
    }
}

function playAgainFunc() {
    let arr = document.getElementsByClassName("td");
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = "#FFF4F1";
        arr[i].className = "td";
    }
    playAgain.style.display = "none";
    player.innerHTML = "Next Player is ...?";
    
    nameEntry.style.display = "flex";
    playMsg.style.display = "none";
}

function getPlayerName(){
    player1Name = player1NameInput.value;
    player2Name = player2NameInput.value;
    
    // displayPlayer1Name.innerHTML = player1Name;
    // displayPlayer2Name.innerHTML = player2Name;

    nameEntry.style.display = "none";
    playMsg.style.display = "block";

    getCurrentPlayer();
}

htmlBoard.addEventListener('click', handleClick);
htmlBoard.addEventListener('mouseover', changeHover);
playAgain.addEventListener('click', resetToInitialState);
submitNameBtn.addEventListener('click',getPlayerName);


