const x = document.getElementById("X");
const o = document.getElementById("O");
const symbolInput = document.querySelectorAll(".symbol-input");

const Player = function (symbol) {
    this.symbol = symbol;

    this.saySymbol = function() {
        console.log(this.symbol)
    }
}

const selectSymbol = ()=>{
    let selectedSymbol;
    if (x.checked === true) {
        selectedSymbol = 'X';
    } else {
        selectedSymbol = 'O';
    }
    let user = new Player(selectedSymbol);
    return user;
}

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

const rowOne =  document.querySelectorAll('.row-1');

const cleanGameboard = ()=>{
    squares.forEach((square)=>{
        square.textContent = '';
        square.classList.remove('X');
        square.classList.remove('O');
    })
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
    } else {
        return
    }
}

const toggleTurns = (e)=>{
    e.textContent += user.symbol;
    square.classList.add(`${user.symbol}`);
    checkWin();
}

const endGame = ()=>{
    squares.forEach((square)=>{
        square.removeEventListener('click', toggleTurns);
    })
}


function startGame () {
    selectSymbol();
    cleanGameboard();

    squares.forEach((square)=>{
        if (square.textContent === '') {
            square.addEventListener('click', toggleTurns)
        } else {
            return
        }
    })

    // squares.forEach((square)=>{
    //     if (square.textContent === '') {
    //         if (user.symbol === 'X') {
    //             square.addEventListener('click',()=>{
    //             square.textContent += user.symbol;
    //             square.classList.add(`${user.symbol}`);
    //             checkWin();
    //             })
    //         } else if (user.symbol === 'O') {
    //             square.textContent += 'X';
    //             square.classList.add('X');
    //             checkWin();
    //         }
    //     } else {
    //         return
    //     }
    // })

    // squares.forEach((square)=>{
    //     square.addEventListener('click',(selectedSymbol)=>{
    //         if (square.textContent === '') {
    //             if (selectedSymbol == 'X') {
    //                 square.textContent += 'X';
    //                 square.classList.add('X');
    //                 checkWin();
    //             } else {
    //                 square.textContent += 'O';
    //                 square.classList.add('O');
    //                 checkWin();
    //             }
    //         } else {
    //             return;
    //         }
    //     })
    // })
}

const gameboard = function(box) {
    this.box = box;
}