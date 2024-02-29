const { Player } = require("../src/player");
const { Ship } = require("../src/ships");
const { Gameboard } = require("./gameBoard");

const {
  displayBoard,
  switchBoard,
  showTurn,
  displayHit,
} = require("../src/display");

//create players
const playerOne = new Player("P1");
const playerTwo = new Player("Comp");

//create ships
const bigOne = new Ship(5);
const scarey = new Ship(4);
const middleChild = new Ship(3);
const sneaky = new Ship(3);
const littleOne = new Ship(2);

//create comp ships
const bigOneComp = new Ship(5);
const scareyComp = new Ship(4);
const middleChildComp = new Ship(3);
const sneakyComp = new Ship(3);
const littleOneComp = new Ship(2);

function defaultPlaceShips(playerOne, playerTwo) {
  //place player ships
  playerOne.game.placeShip(bigOne.length, false, 2, 2);
  playerOne.game.placeShip(scarey.length, false, 3, 2);
  playerOne.game.placeShip(middleChild.length, false, 4, 2);
  playerOne.game.placeShip(sneaky.length, false, 5, 2);
  playerOne.game.placeShip(littleOne.length, false, 6, 2);
  //place playerTwo ships
  playerTwo.game.placeShip(bigOneComp.length, false, 2, 2);
  playerTwo.game.placeShip(scareyComp.length, false, 3, 2);
  playerTwo.game.placeShip(middleChildComp.length, false, 4, 2);
  playerTwo.game.placeShip(sneakyComp.length, false, 5, 2);
  playerTwo.game.placeShip(littleOneComp.length, false, 6, 2);
}

showTurn(playerOne);
defaultPlaceShips(playerOne, playerTwo);
displayBoard(playerOne, playerTwo, "gray", "blue");

document.addEventListener("click", handleClick);

function handleClick(evt) {
  if (evt.target.closest("div") === null) {
    return;
  } else {
    selectAttack(evt);
    switchBoard(playerOne, playerTwo);
  }
}

function selectAttack(evt) {
  let rowNum = evt.target.closest("div").id[0];
  let columnNum = evt.target.closest("div").id[1];

  switch (columnNum) {
    case undefined:
      if (playerOne.game.board[0][rowNum].missed == true) {
        switchBoard(playerOne, playerTwo);
        return;
      }
      if (playerOne.turn == false) {
        playerOne.game.recieveAttack(0, rowNum, evt.target.closest("div").id);
        console.log(evt.target.closest("div").id);
      } else {
        playerTwo.game.recieveAttack(0, rowNum), evt.target.closest("div").id;
        console.log(evt.target.closest("div").id);
      }
      break;
    default:
      if (playerOne.game.board[columnNum][0].missed == true) {
        switchBoard(playerOne, playerTwo);
        return;
      }
      if (playerOne.turn == false) {
        playerOne.game.recieveAttack(
          rowNum,
          columnNum,
          evt.target.closest("div").id
        );
      } else {
        playerTwo.game.recieveAttack(
          rowNum,
          columnNum,
          evt.target.closest("div").id
        );
      }
  }
}
