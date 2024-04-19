import { WINNER_COMBINATIONS } from "../constants.jsx";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBINATIONS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (boardToCheck) => {
  for (const square of boardToCheck) {
    if (square === null) {
      return false;
    }
  }

  return true;
};
