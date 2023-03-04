


class Game {
    constructor(player1, player2) {
        console.log(player1, player2)
        this.player1 = player1
        this.player2 = player2
        this.turn = player1
        this.winningTiles = [
            ['1', '2', '3'], ['4','5','6'], ['7','8','9'], 
            ['1','4','7'], ['2','5','8'], ['3','6','9'], 
            ['1','5','9'], ['3','5','7']
        ]
        this.winner = null
        this.moves = 0
    }

    switchTurn() {
        if (this.turn === this.player1) {
            this.turn = this.player2
        } else {
            this.turn = player1
        }
    }

    winningCombos() {
        this.moves += 1
        for (var i = 0; i < this.winningTiles.length; i++) {
            var combos = this.winningTiles[i]
            if (this.player1.selectedTiles.includes(combos[0]) && this.player1.selectedTiles.includes(combos[1]) && this.player1.selectedTiles.includes(combos[2])) {
                this.winner = player1
                player1.wins += 1
                console.log('good job p1')
              } else if (this.player2.selectedTiles.includes(combos[0]) && this.player2.selectedTiles.includes(combos[1]) && this.player2.selectedTiles.includes(combos[2]) ) {
                this.winner = player2
                player2.wins += 1
                console.log('go player2')
              } 
    }
    
}
    checkDraw() {
        if (this.moves === 9 && this.winner === null) {
            this.winner = 'draw'
        }
    }
    
    resetGame() {
        this.winner = null
        player1.wins = 0
        player2.wins = 0
        this.moves = 0
    }
// max number of moves is 9 total. We need to log every move.
// Everytime a click occurs it needs to run through the winning combos function.
}
//put winning combinations in an array

