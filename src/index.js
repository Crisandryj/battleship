const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");
const { Cell } = require("../src/cells");
const { Ship } = require("../src/ships");
const { renderBoard, processAttack, renderAttack } = require("../src/display");

//create players
const playerOne = new Player("P1");
const computer = new Player("Comp");

//create ships
const bigOne = new Ship(5);
const scarey = new Ship(4);
const middleChild = new Ship(3);
const sneaky = new Ship(3);
const littleOne = new Ship(2);

function defaultPlaceShips(playerOne, computer) {
  //place player ships
  playerOne.game.placeShip(bigOne, bigOne.length, "v", 2, 2);
  playerOne.game.placeShip(scarey, scarey.length, "v", 3, 2);
  playerOne.game.placeShip(middleChild, middleChild.length, "v", 4, 2);
  playerOne.game.placeShip(sneaky, sneaky.length, "v", 5, 2);
  playerOne.game.placeShip(littleOne, littleOne.length, "v", 6, 2);
  //place computer ships
  computer.game.placeShip(bigOne, bigOne.length, "v", 2, 2);
  computer.game.placeShip(scarey, scarey.length, "v", 3, 2);
  computer.game.placeShip(middleChild, middleChild.length, "v", 4, 2);
  computer.game.placeShip(sneaky, sneaky.length, "v", 5, 2);
  computer.game.placeShip(littleOne, littleOne.length, "v", 6, 2);
}

function playGame() {
  //place ships
  defaultPlaceShips(playerOne, computer);
  //playone turn to attack,render attack
  let count = 0;

  alert("Player One make your move");
  // renderAttack(playerOne, computer);
  count += 1;
}

playGame();
renderBoard(playerOne.game.board, "p1Board");
renderBoard(computer.game.board, "compBoard");

console.log(computer.game.board[2][2]);
