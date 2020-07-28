//JS0
const a = "hello"
console.log(a)

const solution = () => {
    console.log(1)
    console.log(2)
    console.log(3)
    return 4
}

//call
const b = solution()
console.log(b)

//JS1
const hello3x = () => {
    let counter = 0

    return () => {
        counter = counter + 1

        if (counter < 4) {
            return "hello"
        } else {
            return ""
        }
    }
}

const helloFunction = () => {
    let hi = ""

    return () => {
        hi = "hello" + hi
        return hi
    }
}

const lessThan = (number1) => {
    return (number2) => {
        return (number2 < number1)
    }
}

const callWith = (number) => {
    return (f) => {
        return f(number)
    }
}

const runIt = (f) => {
    return f
}

const addLog = (msg, fn) => {
  return (a, b) => {
    console.log(msg, a, b)
    return fn(a,b)
  }
}

const love = (counter=99) => {
    if (counter >0) {
        console.log("The things I do for love")
        return love(counter-1)
    }
}

const countTo98 = (counter=0) => {
    if (counter < 99) {
        console.log(counter)
        return countTo98(counter+1)
    }
}

const countToMe = (Me) => {
    if ((Me-8) >= 0) {
        console.log(Me)
        return countToMe(Me-1)
    }
}

const fizzbuzz = (n, i=1) => {
    if (i < n) {
        if (((i % 3) === 0) && (((i % 5) === 0))) {
            console.log("fizzbuzz")
            return fizzbuzz(n, i+1)
        }

        if ((i % 3) === 0) {
            console.log("fizz")
            return fizzbuzz(n, i+1)
        }

        if ((i % 5) === 0) {
            console.log("buzz")
            return fizzbuzz(n, i+1)
        }

        console.log(i)
        return fizzbuzz(n, i+1)
    }
}

const numberedHello = (n, result="") => {
    if (n < 1) {
        return result
    } else {
        return numberedHello(n-1, result+"hello")
    }
}

const sumEvens = (n, sum=0) => {
    if (n < 2) {
        return sum
    } else {
        if ((n % 2) === 0) {
            sum = sum + n
        }

        return sumEvens(n-1, sum)
    }
}

const tryNumRange = (n, fn) => {
    if (n < 2) {
        return fn(1)
    } else {
        if (fn(n)) {
            return true
        } else {
            return tryNumRange(n-1, fn)
        }
    }
}

const fun1 = (n, fn) => {
    if (n > 0) {
        fn()
        return fun1(n-1, fn)
    }
}

const logNoMatching = (s, a, i=0) => {
    if (i < s.length) {
        if (s[i] !== a) {
            console.log(s[i])
            return logNoMatching(s, a, i+1)
        }
    }
}

const logFirstX = (s, n, i=0) => {
    if (n > i) {
        console.log(s[i])
        return logFirstX(s, n, i+1)
    }
}

const lastX = (s, n, i=s.length-1, result="") => {
    if (n > result.length && i >= 0) {
        return lastX(s, n, i-1, s[i]+result)
    } else {
        return result
    }
}

const logOddOnly = (s, i=1) => {
    if (i < s.length) {
        console.log(s[i])
        return logOddOnly(s, i+2)
    }
}

const removeCharacter = (s, c, i=0, result="") => {
    if (i < s.length) {
        if (s[i] === c) {
            return removeCharacter(s, c, i+1, result)
        } else {
            return removeCharacter(s, c, i+1, result+s[i])
        }
    } else {
        return result
    }
}

const secretCodeGenerator = (s1, c, s2, i=0, result="") => {
    if (i < s1.length) {
        if (s1[i] === c) {
            return secretCodeGenerator(s1, c, s2, i+1, result+s2)
        } else {
            return secretCodeGenerator(s1, c, s2, i+1, result+s1[i])
        }
    } else {
        return result
    }
}

const wait20 = () => {
    setTimeout(() => {console.log("one")}, 2000)
}

const oneAndTwo = () => {
    setTimeout(() => {
        console.log("one")
        setTimeout(() => {
            console.log("two"), 2000})}, 1000)
}


//call
oneAndTwo()
