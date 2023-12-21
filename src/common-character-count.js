const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function getMapFromString(s) {
    return s.split('').reduce((acc, ch) => {
      acc[ch] = acc[ch] ? acc[ch] + 1 : 1
      return acc
    }, {})
  }

  const s1Map = getMapFromString(s1)
  const s2Map = getMapFromString(s2)

  // { a: 2, b: 1, c: 2 } 'adcaa'
  // { a: 3, c: 1, d: 1 }
  let count = 0

  for (const key in s1Map) {
    if (s2Map[key]) {
      count += Math.min(s1Map[key], s2Map[key])
    }
  }

  return count
}

module.exports = {
  getCommonCharacterCount,
}
