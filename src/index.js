const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");
const { Cell } = require("../src/cells");
const { Ship } = require("../src/ships");
const { renderBoard, processAttack, renderAttack } = require("../src/display");

//create players
const playerOne = new Player("P1");
const computer = new Player("Comp");

//create ships
const bigONe = new Ship(5);
const scarey = new Ship(4);
const middleChild = new Ship(3);
const sneaky = new Ship(3);
const littleOne = new Ship(2);

function defaultPlaceShips(playerOne, computer) {
  //place player ships
  playerOne.game.placeShip(5, "v", 2, 2);
  playerOne.game.placeShip(4, "v", 3, 2);
  playerOne.game.placeShip(3, "v", 4, 2);
  playerOne.game.placeShip(3, "v", 5, 2);
  playerOne.game.placeShip(2, "v", 6, 2);
  //place computer ships
  computer.game.placeShip(5, "v", 3, 2);
  computer.game.placeShip(4, "v", 4, 2);
  computer.game.placeShip(3, "v", 5, 2);
  computer.game.placeShip(3, "v", 6, 2);
  computer.game.placeShip(2, "v", 7, 2);
}

function playGame() {
  //place ships
  defaultPlaceShips(playerOne, computer);
  //playone turn to attack,render attack
  let count = 0;

  alert("Player One make your move");
  renderAttack(playerOne, computer);
  count += 1;
  console.log(count);
}

//display boards
renderBoard(playerOne.game.board, "p1Board");
renderBoard(computer.game.board, "compBoard");

playGame();

console.log(bigONe);
