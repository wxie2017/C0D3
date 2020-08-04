/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a function,
 *   returns the combined result of the function being called
 *     with every letter in the string
 * @param {string} str
 * @param {function} fun
 * @returns {string}
 */

const solution = (str, fun, result = '', i = 0) => {
    if (str.length > i) {
        return solution(str, fun, result+fun(str[i]), i+1)
    } else {
        return result
    }
}

module.exports = {
  solution
}
