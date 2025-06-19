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
    let symbol;
    if (x.checked === true) {
        symbol = 'X';
    } else {
        symbol = 'O';
    }
    let user = new Player(symbol);
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

const cleanGameboard = ()=>{
    squares.forEach((square)=>{
        square.textContent = '';
    })
}

function startGame () {
    selectSymbol();
    cleanGameboard();
    squares.forEach((square)=>{
        square.addEventListener('click',(selectedSymbol)=>{
            if (square.textContent === '') {
                if (selectedSymbol == 'X') {
                    square.textContent += 'X';
                } else {
                    square.textContent += 'O';
                }
            } else {
                return;
            }
        })
    })
}

const gameboard = function(box) {
    this.box = box;
}