
var player1 = new Player(1, '😀');
var player2 = new Player(2, '😅');

var buttons = document.querySelectorAll('.tile')
var turnDisplay = document.querySelector('.heading')


var buttonsaddEventListener('click', addToken)

var turn = player1;
console.log(player1.tiles)


function addToken(event) {
    console.log('working')
    event.target.textContent = displayPlace()
    switchPlayerTurn()
}





//     for (var i = 0; i < buttons.length; i++) {
//       buttons[i].addEventListener('click', function(event){
//         console.log(player1)
//         event.target.textContent =  displayPlace()
//         switchPlayerTurn()
//         // displayPlace()
//     })
// }


function switchPlayerTurn() {
    if (turn === player1) {
        turn = player2
        console.log(this.turn)
    } else {
        turn = player1
        console.log(this.turn)
    }
}

function displayPlace() {
    if (turn === player1) {
        return 'player1'
    } else {
        return 'player2'
    }
}

// research .contains() in order to not have tiles be over riden by other tiles