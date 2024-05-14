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
  displayBoard(playerOne, playerTwo, "gray", "#8697C4");
  currentBoard = document.querySelector(".P2-board");
  currentBoard.addEventListener(
    "click",
    handleClick.bind(null, playerOne, playerTwo)
  );
}

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
    selectCurrentBoard();
  }
}

export function selectCurrentBoard() {
  let toggleClass = ".P2-board";
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

export function checkShipPlaced(player, length) {
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

export function chooseBoard(
  length,
  turn,
  columnNum,
  rowNum,
  playerOne,
  playerTwo,
  gameBoard
) {
  if (gameBoard.classList.value == "P1-board") {
    playerOne.game.placeShip(length, turn, columnNum, rowNum);
  } else if (gameBoard.classList.value == "P2-board") {
    playerTwo.game.placeShip(length, turn, columnNum, rowNum);
  }
}
