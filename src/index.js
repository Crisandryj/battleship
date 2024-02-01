const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");
const { Cell } = require("../src/cells");
const { Ship } = require("../src/ships");
const { displayBoard, switchBoard, showTurn } = require("../src/display");

//create players
const playerOne = new Player("P1");
const computer = new Player("Comp");

//create ships
const bigOne = new Ship("bigOne", 5);
const scarey = new Ship("scarey", 4);
const middleChild = new Ship("middleChild", 3);
const sneaky = new Ship("sneaky", 3);
const littleOne = new Ship("littleOne", 2);

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

showTurn(playerOne);
defaultPlaceShips(playerOne, computer);
displayBoard(playerOne, "gray");

document.addEventListener("click", select);

function select(evt) {
  if (evt.target.closest("div") === null) {
    return;
  } else {
    switchBoard(playerOne, computer);
    console.log(evt.target.closest("div"));
    return evt.target.closest("div");
  }
}
