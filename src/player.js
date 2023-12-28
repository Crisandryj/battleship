class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
  }

  changeTurn() {
    return this.turn ? (this.turn = false) : (this.turn = true);
  }
}

export { Player };
