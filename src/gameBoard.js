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

  placeShip(shipLength, turn, column, row) {
    const ship = new Ship(shipLength);
    //false is vertical placement
    //true is horizontal placement
    if (turn == false) {
      for (let i = 0; i < shipLength; i++) {
        this.board[column][row + i] = ship;
      }
    } else if (turn == true) {
      for (let i = 0; i < shipLength; i++) {
        this.board[column + i][row] = ship;
      }
    }
  }
  // fix to look for ship
  recieveAttack(row, column, id) {
    if (this.board[row][column].hits >= 0) {
      this.board[row][column].hit();
      this.board[row][column].id.push(id);
      console.log(this.board[row][column]);
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
        if (cell.length >= 0 && cell.hits != 0) {
          counter += 1;
        } else {
        }
      });
    });
    if (counter == 17) {
      return true;
    } else {
      return counter;
    }
  }
}

export { Gameboard };
