/**
 * Write a function called solution that
 * Takes in 2 numbers, returns the larger number
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */

const solution = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

module.exports = {
  solution
}
