const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let zeroIndexes = [];

  for (let i = 0; i < matrix.length; i += 1) {
    let row = matrix[i];
    let currentRowZeroIndexes = [];

    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === 0) {
        currentRowZeroIndexes.push(j);
      }

      if (zeroIndexes.includes(j)) {
        continue;
      }

      sum += row[j];
    }

    zeroIndexes = currentRowZeroIndexes;
    currentRowZeroIndexes = [];
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
