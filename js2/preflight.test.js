// jest test file
const fn = require('./preflight.js')

// jest fake timer
jest.useFakeTimers()


// test for removeCharX
describe('removeCharX function', () => {
    it('should remove the first character', () => {
        const str = "We're in the endgame now."
        const result = fn.removeCharX(str, 0)
        expect(result).toEqual("e're in the endgame now.")
    })
    it('return the original string', () => {
        const str = "a"
        const result = fn.removeCharX(str, 3)
        expect(result).toEqual("a")
    })
    it('return the original string', () => {
        const str = "abc"
        const result = fn.removeCharX(str, -3)
        expect(result).toEqual("abc")
    })
})

// test for less3Diff
describe('less3Diff function', () => {
    it('should return true because no character is different', () => {
        const str1 = "spyderman"
        const str2 = "spyderman"
        const result = fn.less3Diff(str1, str2)
        expect(result).toEqual(true)
    })
    it('should return true because only 1 character is different', () => {
        const str1 = "spiderman"
        const str2 = "spyderman"
        const result = fn.less3Diff(str1, str2)
        expect(result).toEqual(true)
    })
    it('should return true because 2 characters are different', () => {
        const str1 = "spiderman"
        const str2 = "spydermam"
        const result = fn.less3Diff(str1, str2)
        expect(result).toEqual(true)
    })
    it('should return false because 3 characters are different', () => {
        const str1 = "spiderman"
        const str2 = "spydormam"
        const result = fn.less3Diff(str1, str2)
        expect(result).toEqual(false)
    })
    it('should return false because 4 characters are different', () => {
        const str1 = "zpidormam"
        const str2 = "spyderman"
        const result = fn.less3Diff(str1, str2)
        expect(result).toEqual(false)
    })
})

// test for reverso
describe('reverso function', () => {
    it('should return reversed empty string', () => {
        const str = ""
        const result = fn.reverso(str)
        expect(result).toEqual("")
    })
    it('should return reversed 1 character string', () => {
        const str = "s"
        const result = fn.reverso(str)
        expect(result).toEqual("s")
    })
    it('should return reversed 2 characters string', () => {
        const str = "sa"
        const result = fn.reverso(str)
        expect(result).toEqual("as")
    })
    it('should return reversed 3 characters string', () => {
        const str = "sab"
        const result = fn.reverso(str)
        expect(result).toEqual("bas")
    })
})

// test for delayAndCall
describe('delayAndCall function', () => {
    it('should return undefined after n miliseconds', () => {
        const n = 1000
        const fun = () => {
            return 'I am groot'
        }
        const refun = fn.delayAndCall(n, fun)
        const result = refun()
        expect(result).toEqual()
        jest.advanceTimersByTime(1000) //fastfowrd time
        expect(result).toEqual()
    })
})

// test for primeMachine
describe('primeMachine function', () => {
    it('should return next 2 primes starting with a negative number', () => {
        const getPrime1 = fn.primeMachine(-2)
        expect(getPrime1()).toEqual(2)
        getPrime1()
        expect(getPrime1()).toEqual(3)
    })
    it('should not return starting number if prime', () => {
        const getPrime2 = fn.primeMachine(5)
        expect(getPrime2()).toEqual(7)
        getPrime2()
        expect(getPrime2()).toEqual(11)
    })
    it('should return next 3 primes starting at 10', () => {
        const getPrime3 = fn.primeMachine(10)
        expect(getPrime3()).toEqual(11)
        getPrime3()
        expect(getPrime3()).toEqual(13)
        getPrime3()
        expect(getPrime3()).toEqual(17)
    })
})
