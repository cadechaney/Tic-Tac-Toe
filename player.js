
class Player {
    constructor(id, token) {
      this.id = id;
      this.token = token;
      this.wins = 0;
      this.selectedTiles = [];
    }

    increaseWins() {
        this.wins ++;
    }

    addTile(tile) {
        this.selectedTiles.push(tile);
    }
}