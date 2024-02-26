import { forEach } from "lodash";
const { Ship } = require("./ships");

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
    this.board.forEach((row) => {
      for (let i = 0; i < this.columns; i++) {
        row.push({ missed: false, occupied: false });
      }
    });
    return this.board;
  }

  placeShip(shipLength, orientation, column, row) {
    const ship = new Ship(shipLength);
    if (orientation.toLowerCase() == "v") {
      for (let i = 0; i < shipLength; i++) {
        this.board[column][row + i] = ship;
      }
    } else if (orientation.toLowerCase() == "h") {
      for (let i = 0; i < shipLength; i++) {
        this.board[column + i][row] = ship;
      }
    }
  }
  // fix to look for ship
  recieveAttack(row, column) {
    if (this.board[row][column].hits >= 0) {
      this.board[row][column].hit();
    } else {
      this.board[row][column].missed = true;
    }
  }

  allShipsSunk() {
    //go thru each cell
    //check if occuipied and hit
    //return true if all occupied are also hit
    let counter = 0;
    this.board.forEach((array) => {
      array.forEach((cell) => {
        if (cell.occupied == true && cell.hits != 0) {
          counter += 1;
        } else {
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

export { Gameboard };
