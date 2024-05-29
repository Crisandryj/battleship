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

  placeShip(shipLength, turn, columnStart, rowStart) {
    let column = Number(columnStart);
    let row = Number(rowStart);
    const ship = new Ship(shipLength);
    //false is vertical placement
    //true is horizontal placement
    if (turn == false) {
      for (let i = shipLength - 1; i >= 0; i--) {
        if (this.board[column][row + i].length > 0) {
          return;
        }
      }
      for (let i = shipLength - 1; i >= 0; i--) {
        if (row + i > 9) {
          break;
        }
        this.board[column][row + i] = ship;
      }
    } else if (turn == true) {
      for (let i = shipLength - 1; i >= 0; i--) {
        if (this.board[column + i][row].length > 0) {
          return;
        }
      }
      for (let i = shipLength - 1; i >= 0; i--) {
        if (column + i > 9) {
          break;
        }

        this.board[column + i][row] = ship;
      }
    }
  }
  // fix to look for ship
  recieveAttack(row, column, id) {
    if (this.board[row][column].hits >= 0) {
      this.board[row][column].hit();
      this.board[row][column].id.push(id);
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
      return false;
    }
  }
  allShipsPlaced() {
    //go thru each cell
    //check if occuipied and hit
    //return true if all occupied are also hit
    let counter = 0;
    this.board.forEach((array) => {
      array.forEach((cell) => {
        if (cell.length >= 0) {
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

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  placeRandom(len, turn) {
    this.placeShip(len, turn, this.getRandomInt(9), this.getRandomInt(9));
  }
}

export { Gameboard };
