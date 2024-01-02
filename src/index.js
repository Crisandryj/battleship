const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");
const { Cell } = require("../src/cells");
const { Ship } = require("../src/ships");
const { renderTable } = require("../src/display");

function playGame() {
  const playerOne = new Player("P1");
  const computer = new Player("Comp");
  playerOne.board.placeShip(5, "v", 2, 2);
  playerOne.board.placeShip(4, "v", 3, 2);
  playerOne.board.placeShip(3, "v", 4, 2);
  playerOne.board.placeShip(3, "v", 5, 2);
  playerOne.board.placeShip(2, "v", 6, 2);

  computer.board.placeShip(5, "v", 2, 2);
  computer.board.placeShip(4, "v", 3, 2);
  computer.board.placeShip(3, "v", 4, 2);
  computer.board.placeShip(3, "v", 5, 2);
  computer.board.placeShip(2, "v", 6, 2);
}

renderBoard(playerOne.board);
