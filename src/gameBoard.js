import { forEach } from "lodash";
const { Cell } = require("../src/cells");

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
      for (let i = 0; i < shipLength; i++) {
        this.board[column][row + i].occupied = true;
      }
    } else if (orientation.toLowerCase() == "h") {
      for (let i = 0; i < shipLength; i++) {
        this.board[column + i][row].occupied = true;
      }
    }
  }

  recieveAttack(column, row) {
    if (this.board[column][row].occupied == true) {
      this.board[column][row].hit = true;
    } else {
      this.board[column][row].missed = true;
    }
  }

  allShipsSunk() {
    //go thru each cell
    //check if occuipied and hit
    //return true if all occupied are also hit
    let counter = 0;
    this.board.forEach((array) => {
      array.forEach((cell) => {
        if (cell.occupied == true && cell.hit == true) {
          counter += 1;
        }
      });
    });
    if (counter == 17) {
      return true;
    } else {
      return false;
    }
  }
}

export { Gameboard, recieveAttack };
