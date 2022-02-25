/**
 * Random sudoku grid index in 0-8 range
 *
 */

function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(9));
}

export default getRandomIndex;
