/**
 * Write a function called solution that
 *   takes in 2 parameters, a number n and string,
 *   and returns the string repeated n number of times
 * @param {number} num
 * @param {string} str
 * @returns {string}
 */

const solution = (num, str, result = '') => {
    if (num > 0) {
        return solution(num-1, str, str+result)
    }

    return result
}

module.exports = {
  solution
}
