import { forEach } from "lodash";
const { Cell } = require("../src/cells");
const { Ship } = require("../src/ships");
const { Player } = require("../src/player");
const { Gameboard } = require("../src/gameBoard");

function playGame() {
  const game = new Gameboard();
  const playerOne = new Player("James");
  const computer = new Player("Comp");

  game.createBoard();
}

document.body.appendChild(component());
