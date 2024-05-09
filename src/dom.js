const { displayBoard, gameOver, switchBoard } = require("../src/display");

export function startGame(
  GamesContainer,
  playerOne,
  playerTwo,
  display,
  currentBoard
) {
  GamesContainer.removeChild(GamesContainer.firstElementChild);
  playerOne.turn = true;
  display.textContent = "P1 Select Target";
  displayBoard(playerOne, playerTwo, "gray", "blue");
  currentBoard = document.querySelector(".P2-board");
  currentBoard.addEventListener(
    "click",
    handleClick.bind(null, playerOne, playerTwo)
  );
}

let toggleClass = ".P2-board";

function handleClick(playerOne, playerTwo, evt) {
  console.log(evt);
  console.log(playerTwo);
  console.log(playerOne);
  if (evt.target.closest("div") === null) {
    return;
  } else {
    selectAttack(evt, playerOne, playerTwo);
    playerTwo.changeTurn();
    playerOne.changeTurn();
    switchBoard(playerOne, playerTwo);
    if (toggleClass == ".P1-board") {
      toggleClass = ".P2-board";
      console.log("p2");
    } else {
      toggleClass = ".P1-board";
      console.log("p1");
    }
    currentBoard = document.querySelector(toggleClass);
    console.log(currentBoard);
  }
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
