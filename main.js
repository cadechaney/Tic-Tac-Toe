
var player1 = new Player(1, './assets/scorpion.png');
var player2 = new Player(2, './assets/subzero.webp');

var buttons = document.querySelectorAll('.tile')
var turnDisplay = document.querySelector('.heading')


// var buttons.addEventListener ('click', addToken)

var turn = player1;
console.log(player1.tiles)


// function addToken(event) {
//     console.log('working')
//     event.target.textContent = displayPlace()
//     switchPlayerTurn()
// }





    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(event){
        console.log(this.turn)
        event.target.innerHTML =  `<img class='token' src=${turn.token} />`
        switchPlayerTurn()
        // displayPlace()
    })
}


function switchPlayerTurn() {
    if (turn === player1) {
        turn = player2
        console.log(this.turn)
    } else {
        turn = player1
        console.log(this.turn)
    }
}

// research .contains() in order to not have tiles be over riden by other tiles