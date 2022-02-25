import { GRID } from "typings";

/**
 * Function to check  if grid is full
 * @param grid : A 9*9 array consisting of values from 0 - 9 ;
 * @returns
 */
function checkGrid(grid: GRID): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) return false;
    }
  }
  return true;
}

export default checkGrid;
