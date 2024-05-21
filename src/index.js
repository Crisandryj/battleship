const { Player } = require("../src/player");
const { Ship } = require("../src/ships");
const { Gameboard } = require("./gameBoard");
const { allShipsSunk } = require("../src/gameBoard");
const { displaySetUpBoard, colorSquares } = require("../src/display");
const {
  checkShipPlaced,
  removeBtns,
  startGame,
  chooseBoard,
  appendDoneListener,
} = require("../src/dom");

const GamesContainer = document.querySelector(".game-boards-container");
const display = document.querySelector(".display");
currentBoard = document.querySelector(".P1-board");

//create players
const playerOne = new Player("P1");
const playerTwo = new Player("P2");

//defaultPlaceShips(playerOne, playerTwo)
const turnButton = document.querySelector("#turnShip");
//handle turn of ships
let turn = false;

//display set up board
displaySetUpBoard(playerOne);

//select first board
let gameBoard = document.querySelector(".P1-board");

// listen to gameboards clicks
let count = 0;
let doneCount = 0;

turnButton.addEventListener("click", () => {
  return turn ? (turn = false) : (turn = true);
});

gameBoard.addEventListener("click", (evt) => {
  let rowNum;
  let columnNum;
  if (evt.target.closest("div").id[1] >= 0) {
    columnNum = evt.target.closest("div").id[0];
    rowNum = evt.target.closest("div").id[1];
  } else {
    rowNum = evt.target.closest("div").id[0];
    columnNum = 0;
  }
  //place ships
  // go in order of ships and allow 'X' consective clicks in order to place ships in place
  switch (count) {
    case 0:
      const bigOne = new Ship(5);
      chooseBoard(
        bigOne.length,
        turn,
        columnNum,
        rowNum,
        playerOne,
        playerTwo,
        gameBoard
      );

      colorSquares(bigOne, evt, turn);
      if (checkShipPlaced(playerOne, bigOne.length)) {
        count += 1;
      }

      break;
    case 1:
      const scarey = new Ship(4);
      chooseBoard(
        scarey.length,
        turn,
        columnNum,
        rowNum,
        playerOne,
        playerTwo,
        gameBoard
      );
      colorSquares(scarey, evt, turn);
      if (checkShipPlaced(playerOne, scarey.length)) {
        count += 1;
      }
      break;
    case 2:
      const middleChild = new Ship(3);
      chooseBoard(
        middleChild.length,
        turn,
        columnNum,
        rowNum,
        playerOne,
        playerTwo,
        gameBoard
      );
      colorSquares(middleChild, evt, turn);
      if (checkShipPlaced(playerOne, middleChild.length)) {
        count += 1;
      }
      break;
    case 3:
      const sneakyPlayer = new Ship(3);
      chooseBoard(
        sneakyPlayer.length,
        turn,
        columnNum,
        rowNum,
        playerOne,
        playerTwo,
        gameBoard
      );
      colorSquares(sneakyPlayer, evt, turn);
      if (checkShipPlaced(playerOne, sneakyPlayer.length)) {
        count += 1;
      }

      break;
    case 4:
      const littleOne = new Ship(2);
      chooseBoard(
        littleOne.length,
        turn,
        columnNum,
        rowNum,
        playerOne,
        playerTwo,
        gameBoard
      );
      colorSquares(littleOne, evt, turn);
      if (checkShipPlaced(playerOne, littleOne.length)) {
        count += 1;
      }

      appendDoneListener(gameBoard);

      if (doneCount <= 1) {
        doneCount += 1;
        count = 0;
      }
      if (doneCount >= 2) {
        startGame(GamesContainer, playerOne, playerTwo, display, currentBoard);
        const doneBtn = document.querySelector(".done");
        removeBtns(doneBtn, turnButton);
        doneCount = 0;
      }
      //Finish board set up and move to next board
      break;
  }
});
