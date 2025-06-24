const x = document.getElementById("X");
const o = document.getElementById("O");
const symbolInput = document.querySelectorAll(".symbol-input");

const squareOne = document.getElementById("square1");
const squareTwo = document.getElementById("square2");
const squareThree = document.getElementById("square3");
const squareFour = document.getElementById("square4");
const squareFive = document.getElementById("square5");
const squareSix = document.getElementById("square6");
const squareSeven = document.getElementById("square7");
const squareEight = document.getElementById("square8");
const squareNine = document.getElementById("square9");
const squares = document.querySelectorAll('.square');

const startGameBtn = document.getElementById("start-game-btn")

const Player = function (symbol) {
    this.symbol = symbol;
}

let humanSymbol;
let computerSymbol;

const selectSymbol = ()=>{
    if (x.checked === true) {
        humanSymbol = 'X';
        computerSymbol = 'O';
    } else {
        humanSymbol = 'O';
        computerSymbol = 'X';
    }
    let user = new Player(humanSymbol);
    return user && humanSymbol && computerSymbol;
}

const checkWin = ()=>{
    if (
    (squareOne.classList.contains('X') && squareTwo.classList.contains('X') && squareThree.classList.contains('X')) ||
    (squareFour.classList.contains('X') && squareFive.classList.contains('X') && squareSix.classList.contains('X')) ||
    (squareSeven.classList.contains('X') && squareEight.classList.contains('X') && squareNine.classList.contains('X')) ||
    (squareOne.classList.contains('X') && squareFour.classList.contains('X') && squareSeven.classList.contains('X')) ||
    (squareTwo.classList.contains('X') && squareFive.classList.contains('X') && squareEight.classList.contains('X')) ||
    (squareThree.classList.contains('X') && squareSix.classList.contains('X') && squareNine.classList.contains('X'))
    ) {
        endGame();
        alert('X wins');
    } else if (
    (squareOne.classList.contains('O') && squareTwo.classList.contains('O') && squareThree.classList.contains('O')) ||
    (squareFour.classList.contains('O') && squareFive.classList.contains('O') && squareSix.classList.contains('O')) ||
    (squareSeven.classList.contains('O') && squareEight.classList.contains('O') && squareNine.classList.contains('O')) ||
    (squareOne.classList.contains('O') && squareFour.classList.contains('O') && squareSeven.classList.contains('O')) ||
    (squareTwo.classList.contains('O') && squareFive.classList.contains('O') && squareEight.classList.contains('O')) ||
    (squareThree.classList.contains('O') && squareSix.classList.contains('O') && squareNine.classList.contains('O'))
    ) {
        endGame();
        alert('O wins');
    } else if (
        (squareOne.classList.contains('O') || squareOne.classList.contains('X')) &&
        (squareTwo.classList.contains('O') || squareTwo.classList.contains('X')) &&
        (squareThree.classList.contains('O') || squareThree.classList.contains('X')) &&
        (squareFour.classList.contains('O') || squareFour.classList.contains('X')) &&
        (squareFive.classList.contains('O') || squareFive.classList.contains('X')) &&
        (squareSix.classList.contains('O') || squareSix.classList.contains('X')) &&
        (squareSeven.classList.contains('O') || squareSeven.classList.contains('X')) &&
        (squareEight.classList.contains('O') || squareEight.classList.contains('X')) &&
        (squareNine.classList.contains('O') || squareNine.classList.contains('X'))) {
        endGame();
        alert('tie')
    } else {
        return
    }
}

const cleanGameboard = ()=>{
    squares.forEach((square)=>{
        square.textContent = '';
        square.classList.remove('X');
        square.classList.remove('O');
    })
}

const userMove = (e)=>{
    const square = e.target;
    if (square.textContent === '') {
        square.textContent += humanSymbol;
        square.classList.add(humanSymbol);
        checkWin();
        computerMoves();
    }
}

const computerMoves = ()=>{
    let emptySquares = Array.from(squares).filter(sq => sq.textContent === '');
    if (emptySquares.length === 0) return;

    let randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    randomSquare.textContent = computerSymbol;
    randomSquare.classList.add(computerSymbol);
    checkWin();
}

const endGame = ()=>{
    squares.forEach((square)=>{
        square.removeEventListener('click', userMove);
    })
}

function startGame () {
    selectSymbol();
    cleanGameboard();

    squares.forEach((square)=>{
        square.addEventListener('click', userMove)
    })

    if (computerSymbol === 'X') {
        computerMoves();
    }
}

startGameBtn.addEventListener('click', startGame)