const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = JSON.stringify(n).split('')
  let result = []

  digits.forEach((digit, i) => {
    let cp = [...digits]
    cp.splice(i, 1)
    result.push(parseInt(cp.join('')))
  })

  return Math.max(...result)
}

module.exports = {
  deleteDigit,
}
