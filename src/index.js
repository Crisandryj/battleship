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
const buttons = document.querySelector(".buttons");

display.textContent = "Battleship Online";

//create players
const playerOne = new Player("P1");
const playerTwo = new Player("P2");

//handle turn of ships
let turn = false;

//place ship random location
const randomBtn = document.createElement("BUTTON");
randomBtn.classList.add("random");
randomBtn.textContent = "Random Placement";

//place a ship randomly on board
function randomShip(length, count) {
  randomBtn.addEventListener("click", () => {
    playerOne.game.placeRandom(length, false);
    let num = 0;
    playerOne.game.board.forEach((row) => {
      row.forEach((cell) => {
        num += 1;
        if (cell.length > 0) {
          console.log(gameBoard);
          console.log(num);
          let div = document.getElementById(`${num}`);
          div.style.background = "orange";
          count += 1;
          return;
        }
      });
    });
  });
}
// listen to gameboards clicks
let count = 0;
let doneCount = 0;

const turnButton = document.createElement("BUTTON");
const startBattleGameBtn = document.createElement("BUTTON");
startBattleGameBtn.classList.add("start");
startBattleGameBtn.textContent = "START";

const svgMain = document.querySelector(".svgMain");
console.log(svgMain);

buttons.append(startBattleGameBtn);

startBattleGameBtn.addEventListener("click", startBattle);

function startBattle() {
  svgMain.parentNode.removeChild(svgMain);
  startBattleGameBtn.parentNode.removeChild(startBattleGameBtn);
  //add turnship button
  turnButton.textContent = "Turn Ship";
  turnButton.setAttribute("id", "turnButton");
  buttons.append(turnButton);
  // add random ship placement button
  buttons.append(randomBtn);
  //display set up board
  displaySetUpBoard(playerOne);
  //select first board
  let gameBoard = document.querySelector(".P1-board");

  turnButton.addEventListener("click", () => {
    return turn ? (turn = false) : (turn = true);
  });

  gameBoard.addEventListener("click", (evt) => {
    //add turnbtn
    buttons.append(turnButton);
    // add random ship placement button
    buttons.append(randomBtn);
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
        const bigOne = new Ship(5, "bigOne");
        chooseBoard(
          bigOne.length,
          turn,
          columnNum,
          rowNum,
          playerOne,
          playerTwo,
          gameBoard,
          bigOne.name
        );

        colorSquares(bigOne, evt, turn);
        if (checkShipPlaced(playerOne, bigOne.name)) {
          count += 1;
          console.log(bigOne.name);
        }

        break;
      case 1:
        const scarey = new Ship(4, "scarey");
        //not getting called?
        chooseBoard(
          scarey.length,
          turn,
          columnNum,
          rowNum,
          playerOne,
          playerTwo,
          gameBoard,
          scarey.name
        );

        colorSquares(scarey, evt, turn);
        if (checkShipPlaced(playerOne, "scarey")) {
          console.log("check 2");
          count += 1;
        }
        break;
      case 2:
        const middleChild = new Ship(3, "middleChild");
        chooseBoard(
          middleChild.length,
          turn,
          columnNum,
          rowNum,
          playerOne,
          playerTwo,
          gameBoard,
          middleChild.name
        );
        colorSquares(middleChild, evt, turn);
        if (checkShipPlaced(playerOne, "middleChild")) {
          count += 1;
        }
        break;
      case 3:
        const sneakyPlayer = new Ship(3, "sneakyPlayer");
        chooseBoard(
          sneakyPlayer.length,
          turn,
          columnNum,
          rowNum,
          playerOne,
          playerTwo,
          gameBoard,
          sneakyPlayer.name
        );
        colorSquares(sneakyPlayer, evt, turn);
        if (checkShipPlaced(playerOne, "sneakyPlayer")) {
          count += 1;
        }

        break;
      case 4:
        const littleOne = new Ship(2, "littleOne");
        chooseBoard(
          littleOne.length,
          turn,
          columnNum,
          rowNum,
          playerOne,
          playerTwo,
          gameBoard,
          littleOne.name
        );
        colorSquares(littleOne, evt, turn);
        if (checkShipPlaced(playerOne, "littleOne")) {
          count += 1;
        }
        gameBoard.classList.remove("P1-board");

        appendDoneListener(gameBoard, turnButton, randomBtn);

        if (doneCount <= 1) {
          doneCount += 1;
          count = 0;
        }
        if (doneCount == 1) {
          turnButton.parentNode.removeChild(turnButton);
          randomBtn.parentNode.removeChild(randomBtn);
        }
        if (doneCount >= 2) {
          startGame(GamesContainer, playerOne, playerTwo, display);

          const doneBtn = document.querySelector(".done");
          removeBtns(doneBtn, turnButton, randomBtn);
          doneCount = 0;
        }

        //Finish board set up and move to next board
        break;
    }
  });
}
