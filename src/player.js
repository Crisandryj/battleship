class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
  }

  changeTurn() {
    return this.turn ? (this.turn = false) : (this.turn = true);
  }

  computerMove(board) {
    let column = Math.floor(Math.random() * 10);
    let row = Math.floor(Math.random() * 10);
    if (board[column][row].hit == false && board[column][row].missed == false) {
      if (board[column][row].occupied == true) {
        board[column][row].hit = true;
      } else {
        board[column][row].missed = true;
      }
    }
  }
}

export { Player };
