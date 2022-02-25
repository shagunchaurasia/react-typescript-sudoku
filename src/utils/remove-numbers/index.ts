import { GRID } from "typings";
import { getRandomIndex, copyGrid, solveGrid } from "utils";
import global from "global";
/**
 * Removes numbers from a full grid to create a Sudoku puzzle
 * @param grid : 9*9 Sudoku grid;
 * @param attempts  Number of attempts to solve the sudoku puzzle (higher means more difficult) - default 5
 * @returns
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    //Copy our grid

    const gridCopy = copyGrid(grid);
    //Set a global counter
    global.counter = 0;

    //Attempt to solve the grid
    solveGrid(gridCopy);
    //If the global counter is not 1
    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
    //grid[row][col] = backup
    //decrement attempts
  }
  return grid;
}

export default removeNumbers;
