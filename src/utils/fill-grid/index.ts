import { GRID, NUMBERS } from "typings";
import {
  shuffle,
  isInRow,
  isInCol,
  identifySquare,
  isInSquare,
  checkGrid,
} from "utils";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * A backtracking/recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid : 9*9 Sudoko grid;
 */
const fillGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      //Shuffle numbers
      shuffle(numbers);

      for (let value of numbers) {
        //is it not in grid row?

        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            //is it not in grid column?

            const square = identifySquare({ col, grid, row });

            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) return true;
              else if (fillGrid(grid)) return true;
            }
          }
      }

      break;
    }
  }
  grid[row][col] = 0;
};

export default fillGrid;
