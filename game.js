
class Game {
    constructor(player1, player2) {
        this.player1 = new Player('p1', '😀')
        this.player2 = new Player('p2', '😎')
        this.turn = player1
        this.winningTiles = [
            [1,2,3], [4,5,6] [7,8,9], 
            [1,4,7], [2,5,8] [3,6,9], 
            [1,5,9], [3,5,7]
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
        for (var i = 0; i < this.winningTiles.length; i++) {
            var combos = this.winningTiles[i]
            var tile1 = document.getElementById(parseInt(combos[0])).innerHTML
            var tile2 = document.getElementById(parseInt(combos[1])).innerHTML
            var tile3 = document.getElementById(parseInt(combos[2])).innerHTML
            if (this.player1.token === tile1 && this.player1.token === tile2 && this.player1.token === tile3) {
                this.winner = player1
                player1.wins ++
                return 'Good Job p1'
              } else if (this.player2.token === tile1 && this.player2.token === tile2 && this.player2.token === tile3) {
                this.winner = player2
                player2.wins ++
                return 'Good Job p2'
              } else {
                this.gameDraw()
              }
    }
}
    gameDraw() {
        return 'Draw game'
    }
    


}
//put winning combinations in an array