import { random } from "lodash";

const { displayBoard, gameOver, clearColors } = require("../src/display");

const GamesContainer = document.querySelector(".game-boards-container");
//defaultPlaceShips(playerOne, playerTwo)

//buttons
const buttons = document.querySelector(".buttons");

let done = document.createElement("BUTTON");
done.classList.add("done");
done.textContent = "Done";

export function startGame(GamesContainer, playerOne, playerTwo, display) {
  GamesContainer.removeChild(GamesContainer.firstElementChild);
  playerOne.turn = true;
  display.textContent = "P1 Select Target";
  displayBoard(playerOne, playerTwo, "gray", "#8697C4");
}

export function startListeningToBoard(board, playerOne, playerTwo) {
  board.addEventListener("click", handleClick.bind(null, playerOne, playerTwo));
}

function handleClick(playerOne, playerTwo, evt) {
  if (evt.target.closest("div") === null) {
    return;
  } else {
    selectAttack(evt, playerOne, playerTwo);
    playerOne.changeTurn();
    playerTwo.changeTurn();
    switchBoard(playerOne, playerTwo);
  }
}
function switchBoard(playerOne, playerTwo) {
  if (playerOne.turn == false) {
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    displayBoard(playerTwo, playerOne, "#8697C4", "gray");
  } else {
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    displayBoard(playerOne, playerTwo, "gray", "#8697C4");
  }
  gameOver(playerOne);
}
let toggleClass;

export function selectCurrentBoard() {
  if (toggleClass == ".P2-board") {
    toggleClass = ".P1-board";
    console.log("p1");
  } else {
    toggleClass = ".P2-board";
    console.log("p2");
  }
  let currentBoard = document.querySelector(toggleClass);
  return currentBoard;
}

function selectAttack(evt, playerOne, playerTwo) {
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

        gameOver(playerOne);
      } else {
        playerTwo.game.recieveAttack(0, rowNum, evt.target.closest("div").id);

        gameOver(playerTwo);
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
        gameOver(playerOne);
      } else {
        playerTwo.game.recieveAttack(
          rowNum,
          columnNum,
          evt.target.closest("div").id
        );
        gameOver(playerTwo);
      }
  }
}

export function checkShipPlaced(player, name) {
  let check = false;
  player.game.board.forEach((row) => {
    for (let i = 0; i < 10; i++) {
      console.log(row[i]);
      if (row[i].name == name) {
        check = true;
        console.log(row[i].name);
      }
    }
  });
  return check;
}

export function chooseBoard(
  length,
  turn,
  columnNum,
  rowNum,
  playerOne,
  playerTwo,
  gameBoard,
  name
) {
  if (gameBoard.classList.value == "P1-board") {
    playerOne.game.placeShip(length, turn, columnNum, rowNum, name);
  } else if (gameBoard.classList.value == "P2-board") {
    playerTwo.game.placeShip(length, turn, columnNum, rowNum, name);
  }
}

export function removeBtns(doneBtn, turnButton, randomBtn) {
  turnButton.parentNode.removeChild(turnButton);
  doneBtn.parentNode.removeChild(doneBtn);
  randomBtn.parentNode.removeChild(randomBtn);
}

//done count start game after button clicked twice

const display = document.querySelector(".display");
// select container for boards

let doneCount = 0;
export function appendDoneListener(gameBoard) {
  buttons.append(done);
  const doneBtn = document.querySelector(".done");
  doneBtn.addEventListener("click", () => {
    if (doneCount < 2) {
      clearColors();
    }
    gameBoard.classList.remove("P1-board");
    gameBoard.classList.add("P2-board");
    doneCount += 1;
    if (doneCount == 1 || doneCount == 2) {
      doneBtn.parentNode.removeChild(doneBtn);
      display.textContent = "P2 PLACE YOUR SHIPS";
    }
  });
}
