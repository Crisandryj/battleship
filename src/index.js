const { Player } = require("../src/player");
const { Ship } = require("../src/ships");
const { Gameboard } = require("./gameBoard");

const {
  displayBoard,
  switchBoard,
  showTurn,
  displaySetUpBoard,
} = require("../src/display");

//create players
const playerOne = new Player("P1");
const playerTwo = new Player("P2");

//create ships
const bigOne = new Ship(5);
const scarey = new Ship(4);
const middleChild = new Ship(3);
const sneaky = new Ship(3);
const littleOne = new Ship(2);

//Set ships before game starts
function defaultPlaceShips(playerOne, playerTwo) {
  //place player ships
  playerOne.game.placeShip(bigOne.length, false, 2, 2);
  playerOne.game.placeShip(scarey.length, false, 3, 2);
  playerOne.game.placeShip(middleChild.length, false, 4, 2);
  playerOne.game.placeShip(sneaky.length, false, 5, 2);
  playerOne.game.placeShip(littleOne.length, false, 6, 2);
  //place playerTwo ships
  playerTwo.game.placeShip(bigOneplayerTwo.length, false, 3, 2);
  playerTwo.game.placeShip(scareyplayerTwo.length, false, 4, 2);
  playerTwo.game.placeShip(middleChildplayerTwo.length, false, 5, 2);
  playerTwo.game.placeShip(sneakyplayerTwo.length, false, 6, 2);
  playerTwo.game.placeShip(littleOneplayerTwo.length, false, 7, 3);
}

const GamesContainer = document.querySelector(".game-boards-container");
// defaultPlaceShips(playerOne, playerTwo);

//Start game
const startButton = document.querySelector("#start");
//display set up board
displaySetUpBoard(playerOne);

startButton.addEventListener("click", () => {
  startGame();
  startButton.parentNode.removeChild(startButton);
});

function startGame() {
  start = true;
  GamesContainer.removeChild(GamesContainer.firstElementChild);
  playerOne.turn = true;
  showTurn(playerOne);
  displayBoard(playerOne, playerTwo, "gray", "blue");
  document.addEventListener("click", handleClick);
}

function handleClick(evt) {
  if (evt.target.closest("div") === null) {
    return;
  } else {
    selectAttack(evt);
    playerTwo.changeTurn();
    playerOne.changeTurn();
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
      } else {
        playerTwo.game.recieveAttack(0, rowNum), evt.target.closest("div").id;
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

// Color the blocks where the ships were placed
function colorSquares(ship, evt) {
  let div = evt.target.closest("div");
  let row = div.id[0];
  for (let i = ship.length - 1; i >= 0; i--) {
    let num = (parseInt(div.id) + i).toString()[0];
    if (row != parseInt(num[0])) {
      break;
    }
    let select = document.getElementById(`${parseInt(div.id) + i}`);
    select.style.backgroundColor = "orange";
  }
}

// listen to gameboards clicks
const gameBoard = document.querySelector(".P1-board");
let count = 0;

gameBoard.addEventListener("click", (evt) => {
  let rowNum = evt.target.closest("div").id[0];
  let columnNum = evt.target.closest("div").id[1];

  //place ships
  // go in order of ships and allow 'X' consective clicks in order to place ships in place
  switch (count) {
    case 0:
      const bigOne = new Ship(5);
      playerOne.game.placeShip(bigOne.length, false, rowNum, columnNum);
      colorSquares(bigOne, evt);
      console.log(checkShipPlaced(playerOne, bigOne.length, count));
      if (checkShipPlaced(playerOne, bigOne.length)) {
        count += 1;
      }
      console.log(count);
      break;
    case 1:
      const scarey = new Ship(4);
      playerOne.game.placeShip(scarey.length, false, rowNum, columnNum);
      colorSquares(scarey, evt);
      if (checkShipPlaced(playerOne, scarey.length)) {
        count += 1;
      }
      break;
    case 2:
      const middleChild = new Ship(3);
      playerOne.game.placeShip(middleChild.length, false, rowNum, columnNum);
      colorSquares(middleChild, evt);
      if (checkShipPlaced(playerOne, middleChild.length)) {
        count += 1;
      }
      break;
    case 3:
      const sneakyplayer = new Ship(3);
      playerOne.game.placeShip(sneakyplayer.length, false, rowNum, columnNum);
      colorSquares(sneakyplayer, evt);
      if (checkShipPlaced(playerOne, sneakyplayer.length)) {
        count += 1;
      }

      break;
    case 4:
      const littleOne = new Ship(2);
      playerOne.game.placeShip(littleOne.length, false, rowNum, columnNum);
      colorSquares(littleOne, evt);
      if (checkShipPlaced(playerOne, littleOne.length)) {
        count += 1;
      }
      break;
  }
});

function checkShipPlaced(player, length) {
  let check = false;
  player.game.board.forEach((row) => {
    for (let i = 0; i < 10; i++) {
      if (row[i].length == length) {
        check = true;
      }
    }
  });
  return check;
}
