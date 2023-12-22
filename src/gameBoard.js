class Gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
  }
  createBoard() {
    for (let i = 0; i < this.rows; i++) {
      this.board.push([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    }
    return this.board;
  }
}

export { Gameboard };
