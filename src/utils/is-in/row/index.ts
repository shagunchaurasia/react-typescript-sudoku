import { GRID, NUMBERS } from "typings";
interface Input {
  grid: GRID;
  row: number;
  value: NUMBERS;
}
/**
 * Function that returns true if the value is already being used in the current grid row
 * @param input Object with 9*9 sudoku grid, row Index, value
 * @returns
 */
function isInRow({ grid, row, value }: Input): boolean {
  return grid[row].includes(value);
}

export default isInRow;
