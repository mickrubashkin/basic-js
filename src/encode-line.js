const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ''
  let token = null
  let count = 1

  for (let i = 0; i < str.length; i += 1) {
    if (token === null) {
      token = str[i]
      continue
    }

    if (token === str[i]) {
      count += 1

      if (i === str.length - 1) {
        if (count > 1) {
          result += count + token
        } else {
          result += token
        }
      }
    }

    if (str[i] !== token) {
      if (count > 1) {
        result += count + token
      } else {
        result += token
      }
      token = str[i]
      count = 1

      if (i === str.length - 1) {
        result += token
      }
    }
  }

  return result
}

module.exports = {
  encodeLine,
}
