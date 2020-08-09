//js2 arrays
//solution file

const allFuns = {} // define the test object

//Write a function named removeCharX that removes the character at the given index from a string.

const removeCharX = (str, i, j=0, result="") => {
    if ((i >= 0) && (i < str.length)) {
        if (j < str.length) {
            if (j !== i) {
              result = result + str[j]
            }

            return removeCharX(str, i, j+1, result)
        }

        return result
    }

    return str
}

//Write a function named less3Diff that determines whether two strings have fewer than 3 different characters. Both arguments will have the same length.
const less3Diff = (str1, str2, i=0, count=0) => {
    if (str1.length === str2.length) {
        if (count < 3) {
            if (i < str1.length) {
                if (str1[i] !== str2[i]) {
                    count = count + 1
                }

                return less3Diff(str1, str2, i+1, count)
            }

            return true
        }

        return false
    }

    return false
}

//Write a function named reverso that takes in a string, and returns a new string with the input string reversed.
const reverso = (str, i=0, result="") => {
    if (i < str.length) {
        return reverso(str, i+1, str[i]+result)
    }

    return result
}

//Write a function named delayAndCall that takes in 2 parameters, a number and a function, and returns a function. When the returned function is called, the input function will execute after the input number of milliseconds.
const delayAndCall = (n, fun) => {
    return () => {
        setTimeout(fun, n)
    }
}

//Write a function named primeMachine that takes in a number and returns a function. Each time the returned function is called, return the next prime number (starting from the input number).
const isPrime = (num, start=2) => {
    if(num < start) {
	return false
    }
    if(num === start) {
	return true
    }
    if(num % start === 0) {
	return false
    }
    return isPrime(num, start + 1)
}

const getNextPrime = (start) => {
    if(isPrime(start)) {
	return start
    }
    return getNextPrime(start + 1)
}

const primeMachine = (start) => {
    if (start < 2) {
        start = 1 // Any number smaller than 2 is not a prime.
    }
    if (isPrime(start)) {
        start = start + 1
    }
    return () => {
        const result = getNextPrime(start)
        start = start + 1
        return result
    }
}

allFuns.removeCharX = removeCharX // You need this line for every function
                                  // you write for test

allFuns.less3Diff = less3Diff
allFuns.reverso = reverso
allFuns.delayAndCall = delayAndCall
allFuns.primeMachine = primeMachine

//call
console.log(reverso("We're in the endgame now"))

module.exports = allFuns // end of test
