//js2 arrays
//solution file

const allFuns = {} // define the test object

//Write a function named selectiveZero that takes in an array and a number.
//This function replaces the value of any elements of an array when the
//element's value matches the given number with a value of 0.

const selectiveZero = (a, n, i=0) => {
    if (i < a.length) {
        if (n === a[i]) {
            a[i] = 0
        }
        return selectiveZero(a, n, i+1)
    }
}

//Write a function named largest that returns the largest number in an array.
const largest = (a, i=1, result=a[0]) => {
    if (i < a.length) {
        if (a[i] > result) {
            result = a[i]
        }
        return largest(a, i+1, result)
    }
    return result
}

//Write a function named firstXToZero that sets the value of the first X
//elements in an array to 0, where X is the input number.
const firstXToZero = (a, x) => {
    return a.map((e, i) => {
        if (i < x) {
            return 0
        }
        return e
    })
}

//Write a function named allPrime that determines whether the value of
//every element in an array is a prime number.
const isPrime = (n, i=2) => {
    if (n < 2) {
        return false
    }
    if (n === i) {
        return true
    }
    if (n % i === 0) {
        return false
    }
    return isPrime(n, i+1)
}

const allPrime = (a, i=0) => {
    if (i < a.length) {
        if (isPrime(a[i])) {
            return allPrime(a, i+1)
        }
        return false
    }
    return true
}

//Write a function named increasing that determines whether the elements
//of an array are ordered such that they represent a strictly ascending
//sequence of numbers. This means that the value of each element (other
//than the first) is greater than the value of the previous element.
const increasing = (a, i=0) => {
    if (a.length === 1) {
        return false
    }
    if ((i+1) < a.length) {
        if (a[i] < a[i+1]) {
            return increasing(a, i+1)
        }
        return false
    }
    return true
}

//Write a function named copyArray  that takes in an array and
//returns a new array that is an identical copy of the given array.
const copyArray = (a, result=[]) => {
    if (result.length === a.length) {
        return result
    }

    result.push(a[result.length])
    return copyArray(a, result)
}

//Write a function named removeElement that takes in an array
//a and a string as parameters. This function removes any element
//of the array a when the element's value matches the value of
//the string.  On completion, returns the updated array a.
const removeElement = (a, str, i=0) => {
    if (i === a.length) {
        return a
    }
    if (a[i] === str) {
        a.splice(i, 1)
        return removeElement(a, str, i)
    }
    return removeElement(a, str, i+1)
}

//Write a function named copyWithout that takes in an array and
//a number and returns a copied array.  This function copies all
//elements in the array except for elements whose value matches
//the given number. On completion, returns the copied array.
const copyWithout = (a, n, result=[], i=0) => {
    if (i === a.length) {
        return result
    }
    if (n !== a[i]) {
        result.push(a[i])
    }
    return copyWithout(a, n, result, i+1)
}

//Write a function named copyReverse  that makes a copy of an array
//in the reverse order.
const copyReverse = (a, result=[]) => {
    if (a.length === result.length) {
        return result
    }
    result.unshift(a[result.length])
    return copyReverse(a, result)
}

//Write a function named copyLast that copies an array
//but leaves out a given number of elements at the front.
const copyLast = (a, i, result=[]) => {
    if (i >= a.length) {
      return result
    }

    result.push(a[i])

    return copyLast(a, i+1, result)
}

//Write a function called copyFirst  that copies an array
//but leaves out a given number of elements at the end.
const copyFirst = (a, n, result=[], i=0) => {
    if ((result.length+n) >= a.length) {
        return result
    }

    result.push(a[i])

    return copyFirst(a, n, result, i+1)
}

//Write a function named runOnEach that calls a function
//on every element in an array, and returns a new array with the results.
const runOnEach = (a, f, result=[]) => {
    if (a.length === result.length) {
        return result
    }

    result.push(f(a[result.length]))

    return runOnEach(a, f, result)
}

//Write a function named onlyIndex that takes an array of arrays and
//returns an array of each array's element at a given index.
//(If you think of the big array as a table of rows, this function returns a given column).
const onlyIndex = (a, n, result=[]) => {
    if (a.length === result.length) {
        return result
    }

    result.push(a[result.length][n])

    return onlyIndex(a, n, result)
}

//Write a function called oddToZero that copies an array while turning all odd elements to 0.
const oddToZero_helper = (e, i) => {
    if (e % 2) {
        return 0
    }

    return e
}

const oddToZero = (a) => {
    return a.map(oddToZero_helper)
}

//Write a function called firstLetters that returns the first letter of each string
//in an array of strings.
const firstLetters_helper = (e, i) => {
    return e[0]
}

const firstLetters = (a) => {
    return a.map(firstLetters_helper)
}

//Write a function called nonPrimeToZero that copies an array while changing
//any number that isn't prime to 0.
const nonPrimeToZero_helper = (e, i) => {
    if (isPrime(e)) {
        return e
    }

    return 0
}

const nonPrimeToZero = (a) => {
    return a.map(nonPrimeToZero_helper)
}

//Write a function called append that copies an array of strings while
//adding a string to every string in it.
const append = (a, s) => {
    const append_helper = (e, i) => {
        return e + s
    }

    return a.map(append_helper)
}

//Write a function called clone that makes an exact duplicate of an array.
const clone = (a) => {
    return a.map((e, i) => {
        return e
    })
}

allFuns.selectiveZero = selectiveZero
allFuns.largest = largest
allFuns.firstXToZero = firstXToZero
allFuns.allPrime = allPrime
allFuns.increasing = increasing
allFuns.copyArray = copyArray
allFuns.removeElement = removeElement
allFuns.copyWithout = copyWithout
allFuns.copyReverse = copyReverse
allFuns.copyLast = copyLast
allFuns.copyFirst = copyFirst
allFuns.runOnEach = runOnEach
allFuns.onlyIndex = onlyIndex
allFuns.oddToZero = oddToZero
allFuns.firstLetters = firstLetters
allFuns.nonPrimeToZero = nonPrimeToZero
allFuns.append = append
allFuns.clone = clone


module.exports = allFuns // end of test
