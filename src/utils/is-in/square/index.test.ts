import { SQUARE } from "typings";
import isInSquare from ".";
describe("is in square", () => {
  it("returns true when value is in grid square", () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(isInSquare({ square, value: 1 })).toBeTruthy();
    expect(isInSquare({ square, value: 9 })).toBeTruthy();
  });

  it("returns false when value is in grid square", () => {
    const square: SQUARE = [
      [0, 2, 3],
      [4, 5, 6],
      [7, 0, 9],
    ];
    expect(isInSquare({ square, value: 1 })).toBeFalsy();
    expect(isInSquare({ square, value: 8 })).toBeFalsy();
  });
});
