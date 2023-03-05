
// './assets/scorpion.png'

var player1 = new Player('Scorpion', './assets/scorpion.png');
var player2 = new Player('Sub Zero', './assets/subzero.webp');
var game = new Game(player1, player2)

var heading = document.querySelector('.heading')
var killCount1 = document.querySelector('.kills1')
var killCount2 = document.querySelector('.kills2')
var gamegrid = document.querySelector('.game-board')
var buttons = document.querySelectorAll('.tile')
var turnDisplay = document.querySelector('.heading')
console.log(buttons)

// buttons.addEventListener('click', addToken)
// gamegrid.addEventListener('click', addToken)
// window.addEventListener('load', addEventListeners)
//Global Variables
// var turn = player1;

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
      buttons[i].addEventListener('click', playGame)
    }
    
    function playGame(event) {
        event.target.disabled = true
            event.target.innerHTML =  `<img class='token${event.target.id} piece' id=${game.turn.token} src=${game.turn.token} />`
            game.turn.addTile(event.target.id)
            game.winningCombos()
            game.checkDraw()
            game.switchTurn()
            heading.innerText = `It's ${game.turn.id}'s turn`
            updateHeader()
        
        if (game.winner) {
            updateKills() 
            setTimeout(resetGameboard, 3000)
        }
        
}
// console.log(event.target)
// }

// function switchPlayerTurn() {
//     if (turn === player1) {
//         turn = player2
//         game.switchTurn()
//         console.log(this.turn)
//     } else {
//         turn = player1
//         game.switchTurn()
//         console.log(this.turn)
//     }
// }

function updateHeader() {
    if (game.winner === 'draw') {
        heading.innerText = 'DRAW MATCH'
    } else if (game.winner) {
        heading.innerText = `${game.winner.id} WINS!!!`
    }
    console.log(game.winner)
}

function updateKills() {
    if (game.winner === player1) {
        killCount1.innerText = `KILLS ${player1.wins}`
    } else if (game.winner === player2) {
        killCount2.innerText = `KILLS ${player2.wins}`
    }
}

function resetGameboard() {
    game.resetGame()
    console.log('reset works')
    heading.innerText = `It's ${game.turn.id}'s turn`
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = ''
        buttons[i].disabled = false
    }
}
// function gameWon() {
//     if ()
// }
// research .contains() in order to not have tiles be over riden by other tiles