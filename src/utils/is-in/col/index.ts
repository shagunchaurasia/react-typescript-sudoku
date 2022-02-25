import { GRID, NUMBERS } from "typings";

interface Input {
  grid: GRID;
  col: number;
  value: NUMBERS;
}

/**
 * Function that returns true if value is still being used in the current grid column
 * @param input Object with 9*9 Sudoku grid, col index and value
 * @returns
 */
function isInCol({ grid, col, value }: Input): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}

export default isInCol;
