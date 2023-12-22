const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [...arr];
  const buffer = [];

  arr.forEach((el, i) => {
    if (el !== -1) {
      buffer.push(el);
    }
  });

  buffer.sort((a, b) => a - b);

  const sorted = result.map((el) => {
    if (el !== -1) {
      el = buffer.shift();
    }

    return el;
  });

  return sorted;
}

module.exports = {
  sortByHeight,
};
