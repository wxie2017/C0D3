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
const largest = (a) => {
    return a.reduce((acc, e, i, a) => {
        if (acc > e) {
            return acc
        }

        return e
    }, a[0])
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

//Use filter to write a function called noMoreEvens that copies an array,
//removing all even numbers.
const notEven = (e) => {
    return (e % 2)
}

const noMoreEvens = (a) => {
    return a.filter(notEven)
}

//Write a function that takes in an array of strings and removes the empty strings
const notEmpty = (s) => {
    return s.length
}

const noEmpty = (a) => {
    return a.filter(notEmpty)
}

//Write a function called primesOnly that copies an array but keeps only prime numbers.
const primesOnly = (arr) => {
  return arr.filter( (e) => {
    return isPrime(e)
  })
}

//Write a function called firstPrime that finds the first prime number in an array.
const firstPrime = (a) => {
    return a.find((e) => {
        return isPrime(e)
    })
}

//Write a function called sum that adds up all the elements of an array.
const sum = (a) => {
    return a.reduce((acc, e, i, a) => {
        return acc+e
    }, 0)
}

//Write a function called longest that returns the longest string out of an array of strings.
const longest = (a) => {
    return a.reduce((acc, e, i, a) => {
        if (acc.length > e.length) {
            return acc
        }

        return e
    }, a[0])
}

//Write a function called matches that counts the how many times a given element occurs in an array.
const matches = (a, x) => {
    return a.reduce((acc, e, i, a) => {
        if (x === e) {
            return(acc + 1)
        }

        return acc
    }, 0)
}

//Write a function called combineLess5 that takes in an array of strings, and returns a combined string of all strings with length < 5.
const combineLess5 = (a) => {
    return a.reduce((acc, e, i, a) => {
        if (e.length < 5) {
            return acc+e
        }

        return acc
    }, "")
}

//Write a function called largerThan5 that takes in an array, and returns an array of numbers larger than 5.
const largerThan5 = (a) => {
    return a.reduce((acc, e, i, a) => {
        if (e > 5) {
            acc.push(e)
        }

        return acc
    }, [])
}

//Create a prototype function called getEvens that returns a new array of all the even numbers in an array of numbers.
Array.prototype.getEvens = function() {
    return this.filter((e) => {
        return (e % 2 === 0)
    })
}

//Create a prototype function called sum that adds all the elements of an array together.
Array.prototype.sum = function() {
    if ( this.length === 0 ) {
	return undefined
    }

    let startingValue = ''

    if (typeof( this[0] ) === 'number') {
        startingValue = 0
    }

    return this.reduce((acc, e) => {
        return acc+e
    }, startingValue)
}

//Create a prototype function called pad that adds a given string to an array a certain number of times.
Array.prototype.pad = function(n, s) {
    if (n > 0) {
        this.push(s)
        return this.pad(n-1, s)
    }

    return this
}

//Create a prototype function called fizzbuzz that changes the original array.
//All numbers divisible by 3 will be converted to "fizz",
//all numbers divisible by 5 will be converted to "buzz",
//and all numbers divisible by both 3 and 5 will be converted to "fizzbuzz".
Array.prototype.fizzbuzz = function (i=0) {
    if (i === this.length) {
        return this
    }

    if ((this[i] % 3 === 0) && ((this[i] % 5) === 0)) {
        this[i] = "fizzbuzz"
    }

    if ((this[i] % 3) === 0) {
        this[i] = "fizz"
    }

    if ((this[i] % 5) === 0) {
        this[i] = "buzz"
    }

    return this.fizzbuzz(i+1)
}

//Create a prototype function called removeEvens, which removes all the even numbers from the array.
Array.prototype.removeEvens = function() {
    return this.filter((e) => {
        return (e % 2 !== 0)
    })
}

//Create a prototype function called getIterator that returns a function.
//When the returned function is called, it returns the next element of the array.
Array.prototype.getIterator = function(i=0, result) {
    return () => {
        result = this[i]

        if (i < this.length - 1) {
            i = i + 1
        } else {
            i = 0
        }

        return result
    }
}


allFuns.largerThan5 = largerThan5
allFuns.combineLess5 = combineLess5
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
allFuns.noMoreEvens = noMoreEvens
allFuns.noEmpty = noEmpty
allFuns.primesOnly = primesOnly
allFuns.firstPrime = firstPrime
allFuns.sum = sum
allFuns.longest = longest
allFuns.matches = matches


module.exports = allFuns // end of test
