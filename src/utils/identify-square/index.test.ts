import { GRID } from "typings";
import identifySquare from ".";

describe("identify square", () => {
  it("identify the correct square with a given grid, row index and column index", () => {
    const grid: GRID = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 4, 2, 7, 8, 5, 6],
    ];

    expect(identifySquare({ col: 2, grid, row: 2 })).toStrictEqual([
      [8, 4, 2],
      [5, 3, 7],
      [6, 9, 1],
    ]);

    expect(identifySquare({ col: 3, grid, row: 0 })).toStrictEqual([
      [6, 5, 1],
      [2, 8, 9],
      [7, 3, 4],
    ]);
  });
});
