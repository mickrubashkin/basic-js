const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = Array.from({ length: matrix.length }, (row) =>
    Array.from({ length: matrix[0].length }, (cell) => 0)
  );

  matrix.forEach((row, i) => {
    row.forEach((mine, j) => {
      if (mine) {
        if (i - 1 >= 0) {
          if (j - 1 >= 0) {
            res[i - 1][j - 1] += 1;
          }
          if (j + 1 < res[i - 1].length) {
            res[i - 1][j + 1] += 1;
          }
          res[i - 1][j] += 1;
        }

        if (i + 1 < res.length) {
          if (j - 1 >= 0) {
            res[i + 1][j - 1] += 1;
          }
          if (j + 1 < res[i + 1].length) {
            res[i + 1][j + 1] += 1;
          }
          res[i + 1][j] += 1;
        }

        if (j - 1 >= 0) {
          res[i][j - 1] += 1;
        }
        if (j + 1 < res[i].length) {
          res[i][j + 1] += 1;
        }
      }
    });
  });

  return res;
}

module.exports = {
  minesweeper,
};
