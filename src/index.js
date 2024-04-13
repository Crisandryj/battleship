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

const GamesContainer = document.querySelector(".game-boards-container");
// defaultPlaceShips(playerOne, playerTwo);
const turnButton = document.querySelector("#turnShip");

//handle turn of ships
let turn = false;

turnButton.addEventListener("click", () => {
  return turn ? (turn = false) : (turn = true);
});

//Start game
const startButton = document.querySelector("#start");

//Finish board set up
const done = document.querySelector("#done");
//display set up board
displaySetUpBoard(playerOne);
let gameBoard = document.querySelector(".P1-board");

startButton.addEventListener("click", () => {
  startGame();
  startButton.parentNode.removeChild(startButton);
});

function clearColors() {
  let div = document.getElementById("0");
  for (let i = 99; i >= 0; i--) {
    let select = document.getElementById(`${parseInt(div.id) + i}`);
    select.style.removeProperty("background-color");
  }
}

done.addEventListener("click", () => {
  clearColors();
  gameBoard.classList.remove("P1-board");
  gameBoard.classList.add("P2-board");
  count = 0;
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
function colorSquares(ship, evt, turn) {
  let div = evt.target.closest("div");
  let row = div.id[0];
  let column = div.id[0][0];
  //select veritcal blocks to color
  if (turn == true) {
    //stop from ships overlapping
    for (let i = ship.length - 1; i >= 0; i--) {
      start = i * 10;
      let select = document.getElementById(`${parseInt(div.id) + start}`);
      if (select.style.backgroundColor == "orange") {
        return;
      }
    }
    for (let i = ship.length - 1; i >= 0; i--) {
      start = i * 10;
      let num = parseInt(div.id + start).toString()[0];
      if (column != parseInt(num[0])) {
        break;
      }
      let select = document.getElementById(`${parseInt(div.id) + start}`);
      select.style.backgroundColor = "orange";
      start -= 10;
    }
  } else if (turn == false) {
    //stop from ships overlapping
    for (let i = ship.length - 1; i >= 0; i--) {
      let select = document.getElementById(`${parseInt(div.id) + i}`);
      if (select.style.backgroundColor == "orange") {
        return;
      }
    }
    for (let i = ship.length - 1; i >= 0; i--) {
      let select = document.getElementById(`${parseInt(div.id) + i}`);

      select.style.backgroundColor = "orange";
    }
  }
}

function chooseBoard(length, turn, columnNum, rowNum) {
  if (gameBoard.classList.value == "P1-board") {
    playerOne.game.placeShip(length, turn, columnNum, rowNum);
  } else if (gameBoard.classList.value == "P2-board") {
    playerTwo.game.placeShip(length, turn, columnNum, rowNum);
  }
}
// listen to gameboards clicks

let count = 0;

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
      chooseBoard(bigOne.length, turn, columnNum, rowNum);

      colorSquares(bigOne, evt, turn);
      if (checkShipPlaced(playerOne, bigOne.length)) {
        count += 1;
      }

      break;
    case 1:
      const scarey = new Ship(4);
      chooseBoard(scarey.length, turn, columnNum, rowNum);
      colorSquares(scarey, evt, turn);
      if (checkShipPlaced(playerOne, scarey.length)) {
        count += 1;
      }
      break;
    case 2:
      const middleChild = new Ship(3);
      chooseBoard(middleChild.length, turn, columnNum, rowNum);
      colorSquares(middleChild, evt, turn);
      if (checkShipPlaced(playerOne, middleChild.length)) {
        count += 1;
      }
      break;
    case 3:
      const sneakyplayer = new Ship(3);
      chooseBoard(sneakyplayer.length, turn, columnNum, rowNum);
      colorSquares(sneakyplayer, evt, turn);
      if (checkShipPlaced(playerOne, sneakyplayer.length)) {
        count += 1;
      }

      break;
    case 4:
      const littleOne = new Ship(2);
      chooseBoard(littleOne.length, turn, columnNum, rowNum);
      colorSquares(littleOne, evt, turn);
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
