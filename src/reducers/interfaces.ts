import { GRID, BLOCK_COORDS } from "typings";

export interface IReducer {
  // grid?: GRID;
  selectedBlock?: BLOCK_COORDS;
  challengeGrid?: GRID;
  solvedGrid?: GRID;
  workingGrid?: GRID;
}
