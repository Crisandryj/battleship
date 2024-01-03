const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");
const { Cell } = require("../src/cells");
const { Ship } = require("../src/ships");
const { renderBoard } = require("../src/display");

function playGame() {
  const playerOne = new Player("P1");
  const computer = new Player("Comp");
  renderBoard(playerOne.game.board);
  playerOne.game.placeShip(5, "v", 2, 2);
  playerOne.game.placeShip(4, "v", 3, 2);
  playerOne.game.placeShip(3, "v", 4, 2);
  playerOne.game.placeShip(3, "v", 5, 2);
  playerOne.game.placeShip(2, "v", 6, 2);

  computer.game.placeShip(5, "v", 2, 2);
  computer.game.placeShip(4, "v", 3, 2);
  computer.game.placeShip(3, "v", 4, 2);
  computer.game.placeShip(3, "v", 5, 2);
  computer.game.placeShip(2, "v", 6, 2);
}

playGame();
