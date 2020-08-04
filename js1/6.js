/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} num
 * @returns {boolean}
 */

const solution = (num, i = 2) => {
    if (num <= 1) {
        return false
    }

    if (num > i) {
        if ((num % i) === 0) {
            return false
        }

        return solution(num, i+1)
    }

    return true
}

module.exports = {
  solution
}
