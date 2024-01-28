const body = document.querySelector("body");
const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");

const gameBoard = document.querySelector(".game-board");

let count = 0;
export function displayBoard(player) {
  player.game.board.forEach((row) => {
    row.forEach((item) => {
      const block = document.createElement("div");
      block.id = count;
      count += 1;
      gameBoard.append(block);
    });
  });
}
