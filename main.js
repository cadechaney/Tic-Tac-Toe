
// './assets/scorpion.png'

var player1 = new Player('Scorpion', './assets/scorpion.png');
var player2 = new Player('Sub Zero', './assets/subzero.webp');
var game = new Game(player1, player2)

var heading = document.querySelector('.heading')
var gamegrid = document.querySelector('.game-board')
var buttons = document.querySelectorAll('.tile')
var turnDisplay = document.querySelector('.heading')
console.log(buttons)

// buttons.addEventListener('click', addToken)
// gamegrid.addEventListener('click', addToken)
// window.addEventListener('load', addEventListeners)
//Global Variables
var turn = player1;

// function addEventListeners(event) {
//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', addToken(event))
//     }
    
// }

// function addToken() {
//     console.log('it works')
// }
// function addToken(event) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(event) {
        console.log(event.target)
        event.target.innerHTML =  `<img class='token${event.target.id} piece' id=${turn.token} src=${turn.token} />`
        game.turn.addTile(event.target.id)
        switchPlayerTurn()
        game.winningCombos()
        game.checkDraw()
        updateHeader()
    })
}
// console.log(event.target)
// }

function switchPlayerTurn() {
    if (turn === player1) {
        turn = player2
        game.switchTurn()
        console.log(this.turn)
    } else {
        turn = player1
        game.switchTurn()
        console.log(this.turn)
    }
}

function updateHeader() {
    if (game.winner === 'draw') {
        heading.innerText = 'DRAW MATCH'
    } else if (game.winner) {
        heading.innerText = `${game.winner.id} WINS!!!`
    }
    console.log(game.winner)
}
// function gameWon() {
//     if ()
// }
// research .contains() in order to not have tiles be over riden by other tiles