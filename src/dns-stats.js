const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  function getDNS(domain) {
    const names = domain.split('.')

    let result = []

    for (let i = names.length - 1; i >= 0; i -= 1) {
      if (result.length === 0) {
        result.push('.' + names[i])
      } else {
        result.push(result[result.length - 1] + '.' + names[i])
      }
    }

    return result
  }

  let dnsList = []

  domains.forEach((domain) => {
    dnsList = [...dnsList, ...getDNS(domain)]
  })

  const dnsStat = dnsList.reduce((acc, dns) => {
    acc[dns] = acc[dns] ? acc[dns] + 1 : 1
    return acc
  }, {})

  return dnsStat
}

module.exports = {
  getDNSStats,
}
