const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function normalizeArgs(str, options) {
    let validatedStr = str

    if (typeof str !== 'string') {
      validatedStr = String(str)
    }

    const defaults = {
      repeatTimes: 0,
      separator: '+',
      addition: '',
      additionRepeatTimes: 0,
      additionSeparator: '|',
    }

    let validatedOptions = { ...defaults, ...options }

    if (typeof validatedOptions.separator !== 'string') {
      validatedOptions.separator = String(validatedOptions.separator)
    }

    if (typeof validatedOptions.addition !== 'string') {
      validatedOptions.addition = String(validatedOptions.addition)
    }

    return [validatedStr, validatedOptions]
  }

  const [normStr, normOptions] = normalizeArgs(str, options)

  let addition = normOptions.addition

  for (let i = 1; i < normOptions.additionRepeatTimes; i += 1) {
    addition += normOptions.additionSeparator + normOptions.addition
  }

  let strWithAddition = normStr + addition

  let repeatedStr = strWithAddition

  for (let i = 1; i < normOptions.repeatTimes; i += 1) {
    repeatedStr += normOptions.separator + strWithAddition
  }

  return repeatedStr
}

module.exports = {
  repeater,
}
