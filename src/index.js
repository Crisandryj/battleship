const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");
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

//create ships
const bigOneComp = new Ship("bigOne", 5);
const scareyComp = new Ship("scarey", 4);
const middleChildComp = new Ship("middleChild", 3);
const sneakyComp = new Ship("sneaky", 3);
const littleOneComp = new Ship("littleOne", 2);

function defaultPlaceShips(playerOne, computer) {
  //place player ships
  playerOne.game.placeShip(bigOne, bigOne.length, "v", 2, 2);
  playerOne.game.placeShip(scarey, scarey.length, "v", 3, 2);
  playerOne.game.placeShip(middleChild, middleChild.length, "v", 4, 2);
  playerOne.game.placeShip(sneaky, sneaky.length, "v", 5, 2);
  playerOne.game.placeShip(littleOne, littleOne.length, "v", 6, 2);
  //place computer ships
  computer.game.placeShip(bigOneComp, bigOneComp.length, "v", 2, 2);
  computer.game.placeShip(scareyComp, scareyComp.length, "v", 3, 2);
  computer.game.placeShip(middleChildComp, middleChildComp.length, "v", 4, 2);
  computer.game.placeShip(sneakyComp, sneakyComp.length, "v", 5, 2);
  computer.game.placeShip(littleOneComp, littleOneComp.length, "v", 6, 2);
}

showTurn(playerOne);
defaultPlaceShips(playerOne, computer);
displayBoard(playerOne, "gray");

document.addEventListener("click", select);

function select(evt) {
  if (evt.target.closest("div") === null) {
    return;
  } else {
    selectAttack(evt);
    switchBoard(playerOne, computer);
    console.log(evt.target.closest("div"));
    return evt.target.closest("div");
  }
}
function selectAttack(evt) {
  let rowNum = evt.target.closest("div").id[0];
  let columnNum = evt.target.closest("div").id[1];
  //dont allow player to select the same box again
  if (playerOne.game.board[rowNum][columnNum].missed == true) {
    switchBoard(playerOne, computer);
    return;
  }
  if (playerOne.turn == false) {
    playerOne.game.recieveAttack(rowNum, columnNum);
  } else {
    computer.game.recieveAttack(rowNum, columnNum);
  }
}
