// jest test file
const fn = require('./non-primitive.js')

// jest fake timer
jest.useFakeTimers()


// test for selectiveZero
describe('selectiveZero function', () => {
    it('should return the same array when no match', () => {
        const a = [1, 2, 3, 4, 5]
        const n = 6
        fn.selectiveZero(a, n)
        const result = a
        expect(result[0]).toEqual(1)
        expect(result[1]).toEqual(2)
        expect(result[2]).toEqual(3)
        expect(result[3]).toEqual(4)
        expect(result[4]).toEqual(5)
    })
    it('should return the zero array when all match', () => {
        const a = [1, 1, 1, 1, 1]
        const n = 1
        fn.selectiveZero(a, n)
        const result = a
        expect(result[0]).toEqual(0)
        expect(result[1]).toEqual(0)
        expect(result[2]).toEqual(0)
        expect(result[3]).toEqual(0)
        expect(result[4]).toEqual(0)
    })
    it('should return the 1 zero array when 1 match', () => {
        const a = [1, 2, 3, 4, 5]
        const n = 1
        fn.selectiveZero(a, n)
        const result = a
        expect(result[0]).toEqual(0)
        expect(result[1]).toEqual(2)
        expect(result[2]).toEqual(3)
        expect(result[3]).toEqual(4)
        expect(result[4]).toEqual(5)
    })
    it('should return the 2 zero array when 2 match', () => {
        const a = [1, 2, 3, 4, 1]
        const n = 1
        fn.selectiveZero(a, n)
        const result = a
        expect(result[0]).toEqual(0)
        expect(result[1]).toEqual(2)
        expect(result[2]).toEqual(3)
        expect(result[3]).toEqual(4)
        expect(result[4]).toEqual(0)
    })
})

// test for largest
describe('largest function', () => {
    it('should return the 1 element when 1 array', () => {
        const a = [1]
        const result = fn.largest(a)
        expect(result).toEqual(1)
    })
    it('should return the largest when all positive', () => {
        const a = [1, 2, 3, 4, 5]
        const result = fn.largest(a)
        expect(result).toEqual(5)
    })
    it('should return the largest when mixed', () => {
        const a = [1, 0, 3, 4, -5]
        const result = fn.largest(a)
        expect(result).toEqual(4)
    })
})

// test for firstXToZero
describe('firstXToZero function', () => {
    it('should return 3 zero for x = 3', () => {
        const a = [0, 5, 9, 6]
        const x = 3
        const result = fn.firstXToZero(a, x)
        expect(result[0]).toEqual(0)
        expect(result[1]).toEqual(0)
        expect(result[2]).toEqual(0)
        expect(result[3]).toEqual(6)
    })
    it('should return 2 zero for x = 2', () => {
        const a = [1, 5, 4, 3, 3]
        const x = 2
        const result = fn.firstXToZero(a, x)
        expect(result[0]).toEqual(0)
        expect(result[1]).toEqual(0)
        expect(result[2]).toEqual(4)
        expect(result[3]).toEqual(3)
        expect(result[4]).toEqual(3)
    })
    it('should return 1 zero for x =1', () => {
        const a = [1, 5, 9, 6]
        const x = 1
        const result = fn.firstXToZero(a, x)
        expect(result[0]).toEqual(0)
        expect(result[1]).toEqual(5)
        expect(result[2]).toEqual(9)
        expect(result[3]).toEqual(6)
    })
    it('should return the same array for x =0', () => {
        const a = [1]
        const x = 0
        const result = fn.firstXToZero(a, x)
        expect(result[0]).toEqual(1)
    })
})

// test for allPrime
describe('allPrime function', () => {
    it('should return false when 1 is not prime', () => {
        const a = [1, 2, 3, 5]
        result = fn.allPrime(a)
        expect(result).toEqual(false)
    })
    it('should return false when 2 is not prime', () => {
        const a = [2, 3, 5, 4, 8]
        result = fn.allPrime(a)
        expect(result).toEqual(false)
    })
    it('should return trun when only 1 is prime', () => {
        const a = [5]
        result = fn.allPrime(a)
        expect(result).toEqual(true)
    })
    it('should return trun when all are prime', () => {
        const a = [5, 7, 11, 17, 19]
        result = fn.allPrime(a)
        expect(result).toEqual(true)
    })
})

// test for increasing
describe('increasing function', () => {
    it('should return false when only 1 element', () => {
        const a = [1]
        result = fn.increasing(a)
        expect(result).toEqual(false)
    })
    it('should return false when 2 elements are equal', () => {
        const a = [2, 3, 3, 4, 8]
        result = fn.increasing(a)
        expect(result).toEqual(false)
    })
    it('should return true when increasing', () => {
        const a = [5, 7, 9, 11, 12]
        result = fn.increasing(a)
        expect(result).toEqual(true)
    })
})

// test for copyArray
describe('copyArray function', () => {
    it('should return empty array when only 0 element', () => {
        const a = []
        const result = fn.copyArray(a)
        expect(result).toEqual([])
    })
    it('should return 2 elements when input 2 elements', () => {
        const a = [2, 3]
        const result = fn.copyArray(a)
        expect(result).toEqual([2, 3])
    })
    it('should return 3 elements when input 3 elements', () => {
        const a = [2, 3, 4]
        const result = fn.copyArray(a)
        expect(result).toEqual([2, 3, 4])
    })
})

// test for removeElement
describe('removeElement function', () => {
    it('should return same array when no matching', () => {
        const a = ["abc", "bcd", "efg"]
        const s = ""
        result = fn.removeElement(a, s)
        expect(result).toEqual(["abc", "bcd", "efg"])
        const b = fn.removeElement(a, s)
        result = (b === a)
        expect(result).toEqual(true)
    })
    it('should return same array with element removed when matching', () => {
        const a = ["", "abc", "bcd", "", "", "efg", ""]
        const s = ""
        result = fn.removeElement(a, s)
        expect(result).toEqual(["abc", "bcd", "efg"])
        const b = fn.removeElement(a, s)
        result = (b === a)
        expect(result).toEqual(true)
    })
})

// test for copyWithout
describe('copyWithout function', () => {
    it('should return same array when no matching', () => {
        const a = [2, 1, 2, 2, 3, 2, 4, 2, 2]
        const n = 5
        result = fn.copyWithout(a, n)
        expect(result).toEqual([2, 1, 2, 2, 3, 2, 4, 2, 2])
    })
    it('should return array when matching removed', () => {
        const a = [2, 1, 2, 2, 3, 2, 4, 2, 2]
        const n = 2
        result = fn.copyWithout(a, n)
        expect(result).toEqual([1, 3, 4])
    })
    it('should not modify original array', () => {
        const a = [5, 2, 2, 9]
        fn.copyWithout(a, 2)
        expect(a).toEqual([5, 2, 2, 9])
    })
})

// test for copyReverse
describe('copyReverse function', () => {
    it('should return same array when 1 element', () => {
        const a = [2]
        result = fn.copyReverse(a)
        expect(result).toEqual([2])
    })
    it('should return array reversed array', () => {
        const a = [2, 1, 2, 2, "a", "abc"]
        result = fn.copyReverse(a)
        expect(result).toEqual(["abc", "a", 2, 2, 1, 2])
    })
    it('should not modify original array', () => {
        const a = [5, 2, 2, 9]
        fn.copyReverse(a)
        expect(a).toEqual([5, 2, 2, 9])
    })
})

// test for copyLast
describe('copyLast function', () => {
    it('should return same array when number is 0', () => {
        const a = [2, 2, 3]
        const n = 0
        result = fn.copyLast(a, n)
        expect(result).toEqual([2, 2, 3])
    })
    it('should return array with n elements left', () => {
        const a = [2, 1, 2, 2, "a", "abc"]
        const n = 2
        result = fn.copyLast(a, n)
        expect(result).toEqual([2, 2, "a", "abc"])
    })
    it('should not modify original array', () => {
        const a = [5, 2, 2, 9]
        const n = 3
        fn.copyLast(a, n)
        expect(a).toEqual([5, 2, 2, 9])
    })
})

// test for copyFirst
describe('copyFirst function', () => {
    it('should return same array when number is 0', () => {
        const a = [2, 2, 3]
        const n = 0
        result = fn.copyFirst(a, n)
        expect(result).toEqual([2, 2, 3])
    })
    it('should return array with last n elements left', () => {
        const a = [2, 1, 2, 2, "a", "abc"]
        const n = 2
        result = fn.copyFirst(a, n)
        expect(result).toEqual([2, 1, 2, 2])
    })
    it('should not modify original array', () => {
        const a = [5, 2, 2, 9]
        const n = 3
        fn.copyFirst(a, n)
        expect(a).toEqual([5, 2, 2, 9])
    })
})

// test for runOnEach
describe('runOnEach function', () => {
    it('should not modify original array', () => {
        const a = [5, 2, 2, 9]
        const f = (x) => { return x+1 }
        fn.runOnEach(a, f)
        expect(a).toEqual([5, 2, 2, 9])
    })
    it('should return array with element + 1', () => {
        const a = [5, 2, 2, 9]
        const f = (x) => { return x+1 }
        result = fn.runOnEach(a, f)
        expect(result).toEqual([6, 3, 3, 10])
    })
    it('should return array function called', () => {
        const a = [5, 2, 2, 9]
        const f = (x) => { return "a" }
        result = fn.runOnEach(a, f)
        expect(result).toEqual(["a", "a", "a", "a"])
    })
})

// test for onlyIndex
describe('onlyIndex function', () => {
    const someNumbers = [
        [1,2,3,4,5],
        [6,9,8,7,6],
        [4,5,6,6,7],
        [0,1,2,3,4]
    ]
    it('should not modify the original array', () => {
        const original = [...someNumbers]
        fn.onlyIndex(someNumbers, 2)
        expect(someNumbers).toEqual(original)
    })
    it('should pull out the element at index 2', () => {
        const result = fn.onlyIndex(someNumbers, 2)
        expect(result).toEqual([3, 8, 6, 2])
    })
    it('should pull out the element at index 0', () => {
        const result = fn.onlyIndex(someNumbers, 0)
        expect(result).toEqual([1, 6, 4, 0])
    })
})

// test for oddToZero
describe('oddToZero function', () => {
    const a = [1,2,3,4,5]
    it('should not modify the original array', () => {
        const original = [...a]
        fn.oddToZero(a)
        expect(a).toEqual(original)
    })
    it('should set the odd element to 0', () => {
        const result = fn.oddToZero(a)
        expect(result).toEqual([0, 2, 0, 4, 0])
    })
})

// test for firstLetters
describe('firstLetters function', () => {
    const a = ["a1","b2","c3","d4","e5"]
    it('should not modify the original array', () => {
        const original = [...a]
        fn.firstLetters(a)
        expect(a).toEqual(original)
    })
    it('should return the first letter of each element', () => {
        const result = fn.firstLetters(a)
        expect(result).toEqual(["a", "b", "c", "d", "e"])
    })
})

// test for nonPrimeToZero
describe('nonPrimeToZero function', () => {
    const a = [1, 3, 2, 6, 10, 11, 13]
    it('should not modify the original array', () => {
        const original = [...a]
        fn.nonPrimeToZero(a)
        expect(a).toEqual(original)
    })
    it('should set non prime element to 0', () => {
        const result = fn.nonPrimeToZero(a)
        expect(result).toEqual([0, 3, 2, 0, 0, 11, 13])
    })
})

// test for append
describe('append function', () => {
    const a = ["a", "b", "c"]
    const s = "000"
    it('should not modify the original array', () => {
        const original = [...a]
        fn.append(a, s)
        expect(a).toEqual(original)
    })
    it('should return an array with string appended to each element', () => {
        const result = fn.append(a, s)
        expect(result).toEqual(["a000", "b000", "c000"])
    })
})

// test for clone
describe('clone function', () => {
    const a = ["a", "b", "c"]
    it('should not modify the original array', () => {
        const original = [...a]
        fn.clone(a)
        expect(a).toEqual(original)
    })
    it('should return the same array', () => {
        const result = fn.clone(a)
        expect(result).toEqual(["a", "b", "c"])
    })
})
