import { forEach } from "lodash";
const { Cell } = require("../src/cells");
const { Ship } = require("../src/ships");

class Gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
  }
  createBoard() {
    for (let i = 0; i < this.rows; i++) {
      this.board.push([]);
    }
    this.board.forEach((array) => {
      for (let i = 0; i < this.columns; i++) {
        array.push(new Cell());
      }
    });
    return this.board;
  }

  placeShip(shipLength, orientation, column, row) {
    if (orientation.toLowerCase() == "v") {
      for (let i = row + 1; i < shipLength; i++) {
        this.board[column][i].occupied = true;
      }
      return this.board;
    } else {
      for (let i = column; i < shipLength; i++) {
        this.board[i][row].occupied = true;
      }
    }
  }
}

export { Gameboard };
