// jest test file
const fn = require('./objects.js')

// jest fake timer
jest.useFakeTimers()


// test for mergeArrays
describe('mergeArrays function', () => {
    it('should not modify original array', () => {
        const a = [5, 2, 2, 9]
        const b = ["a", "b", "c"]
        fn.mergeArrays(a, b)
        expect(a).toEqual([5, 2, 2, 9])
        expect(b).toEqual(["a", "b", "c"])
    })
    it('should return merged array of both arrays', () => {
        const a = [5, 2, 2, 9]
        const b = ["a", "b", "c"]
        result = fn.mergeArrays(a, b)
        expect(result).toEqual([5, 2, 2, 9, "a", "b", "c"])
    })
    it('should return first array when second array is empty', () => {
        const a = [5, 2, 2, 9]
        const b = []
        result = fn.mergeArrays(a, b)
        expect(result).toEqual([5, 2, 2, 9])
    })
    it('should return second array when first array is empty', () => {
        const a = []
        const b = ["a", "b", "c"]
        result = fn.mergeArrays(a, b)
        expect(result).toEqual(["a", "b", "c"])
    })
})

// test for firstLongerThan
describe('firstLongerThan function', () => {
    it('should not modify original array', () => {
        const a = ["a", "bcd", "efgh"]
        const n = 1
        fn.firstLongerThan(a, n)
        expect(a).toEqual(["a", "bcd", "efgh"])
    })
    it('should return first string longer than number', () => {
        const a = ["", "a", "bcd", "efgh"]
        const n = 0
        result = fn.firstLongerThan(a, n)
        expect(result).toEqual("a")
    })
    it('should return undefined when not found', () => {
        const a = ["", "a", "bcd", "efgh"]
        const n = 5
        result = fn.firstLongerThan(a, n)
        expect(result).toEqual(undefined)
    })
})

// test for getReturnValues
describe('getReturnValues function', () => {
    it('should return array of function result of array elements', () => {
        const af = [() => {return 0},
                    () => {return},
                    () => {return "a"}]
        result = fn.getReturnValues(af)
        expect(result).toEqual([0, undefined, "a"])
    })
    it('should return [] when array is empty', () => {
        const af = []
        result = fn.getReturnValues(af)
        expect(result).toEqual([])
    })
})

// test for zeroSquare
describe('zeroSquare function', () => {
    it('should return [] when n = 0', () => {
        const n = 0
        result = fn.zeroSquare(n)
        expect(result).toEqual([])
    })
    it('should return [[0]] when n = 1', () => {
        const n = 1
        result = fn.zeroSquare(n)
        expect(result).toEqual([[0]])
    })
    it('should return 3x3 array is 0 when n = 3', () => {
        const n = 3
        result = fn.zeroSquare(n)
        expect(result).toEqual([[0, 0, 0],
                                [0, 0, 0],
                                [0, 0, 0]])
    })
})

// test for addKV
describe('addKV function', () => {
    it('should return obj with new key and value', () => {
        const obj = {
            name: "obj",
            age: 0
        }

        const key = "address"
        const value = "home"

        result = fn.addKV(obj, key, value)
        expect(result.address).toEqual("home")
    })
    it('should return original obj when key is empty', () => {
        const obj = {
            name: "obj",
            age: 0
        }

        const key = ""
        const value = "yes"

        result = fn.addKV(obj, key, value)
        expect(result.key).toEqual(undefined)
        expect(result).toEqual(obj)
    })
})

// test for filterNonKeys
describe('filterNonKeys function', () => {
    it('should return array with key strings of obj', () => {
        const obj = {
            name: "address",
            age: 0
        }

        const s = ["name", "age", "address"]

        result = fn.filterNonKeys(s, obj)
        expect(result).toEqual(["name", "age"])
    })
    it('should return [] when no matching', () => {
        const obj = {
            name: "address",
            age: 0
        }

        const s = ["0name", "1age", "address"]

        result = fn.filterNonKeys(s, obj)
        expect(result).toEqual([])
    })
})

// test for addDescriptions
describe('addDescriptions function', () => {
    it('should add description to array with obj', () => {
        const characters = [{name: "ironman"},{name: "spiderman"},{name:"hulk"}]
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }

        result = fn.addDescriptions(characters, info)
        expect(result).toEqual([
            {name: "ironman", description: "arrogant"},
            {name: "spiderman", description: "naive"},
            {name:"hulk", description: "strong"}
        ])
    })
    it('should return [] for []', () => {
        const obj = []
        const s = []
        result = fn.addDescriptions(obj, s)
        expect(result).toEqual([])
    })
})

// test for countOccurrences
describe('countOccurrences function', () => {
    it('should return obj with occurrences', () => {
        const abc = ["abc", "a", "abc", "b", "abc", "a", "b", "c", "abc"]
        const result = fn.countOccurrences(abc)
        expect(result).toEqual({
            abc: 4,
            a: 2,
            b: 2,
            c: 1})
    })
})

// test for longestString
describe('longestString function', () => {
    it('should return the longest value of object', () => {
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }

        const result = fn.longestString(info)
        expect(result).toEqual("arrogant")
    })
})

// test for keyOfLongestString
describe('keyOfLongestString function', () => {
    it('should return the key of longest value of object', () => {
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }
        const result = fn.keyOfLongestString(info) // result should be "ironman"
        // because "arrogant" is longer than "naive" and "strong"
        expect(result).toEqual("ironman")
    })

    it('should return the key of longest value of object', () => {
        const info2 = {
            a: "xxxxxx",
            bc: "xx",
            abc: "xxx",
        }
        const result = fn.keyOfLongestString(info2)
        expect(result).toEqual("a")
    })
})

// test for removeLongestString
describe('removeLongestString function', () => {
    it('should return object with the longest value entry removed', () => {
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }

        const result = fn.removeLongestString(info)
        expect(result).toEqual({spiderman: "naive", hulk: "strong"})
    })
})

// test for commas
describe('commas function', () => {
    it('should return a string of values of object with commas', () => {
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }

        const result = fn.commas(info)
        expect(result).toEqual("arrogant, naive, strong")
    })
})

// test for headers
describe('headers function', () => {
    it('should return <h1> header of values of object', () => {
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }

        const result = fn.headers(info)
        expect(result).toEqual("<h1>ironman</h1><h1>spiderman</h1><h1>hulk</h1>")
    })
})

// test for prototype forEach
describe('forEach function', () => {
    it('should run a function 3 times on 3 elements', () => {
        const fun = jest.fn()
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }
        info.forEach(fun)
        expect(fun).toHaveBeenCalledTimes(3)
    })
    it('should run a function 0 times on an empty object', () => {
        const fun = jest.fn()
        const imEmpty = {}
        imEmpty.forEach(fun)
        expect(fun).not.toHaveBeenCalled()
    })
    it('should let functions access object values & positions', () => {
        const vals = []
        const fun = (_k, v, i) => {
            vals.push(i+v)
        }
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }
        info.forEach(fun)
        expect(vals).toEqual(["0arrogant", "1naive", "2strong"])
    })
})

describe('filter function', () => {
    const leaders = {
        vermilion: "Surge",
        cinnabar: "Blaine",
        fuchsia: "Koga",
        saffron: "Sabrina"
    }
    it('should filter based on keys', () => {
        const seven = (k) => {
            return k.length === 7
        }
        const result = leaders.filter(seven)
        expect(result).toEqual({fuchsia: "Koga", saffron: "Sabrina"})
    })
    it('should filter based on keys', () => {
        const six = (_k, v) => {
            return v.length < 6
        }
        const result = leaders.filter(six)
        expect(result).toEqual({vermilion: "Surge", fuchsia: "Koga"})
    })
    it('should return an empty object if no matches', () => {
        const celadon = (k) => {
            return k === "Celadon"
        }
        const result = leaders.filter(celadon)
        expect(result).toEqual({})
    })
})

describe('reduce function', () => {
    it('should let functions access keys, values, & positions', () => {
        const fun = (acc, key, value, i) => {
            return acc + `${key}-${i}-${value},`
        }
        const info = {
            ironman: "arrogant",
            spiderman: "naive",
            hulk: "strong",
        }
        const result = info.reduce(fun, "")
	const exp = "ironman-0-arrogant,spiderman-1-naive,hulk-2-strong,"
        expect(result).toEqual(exp)
    })
    it('should return the starting value if the object is empty', () => {
        const imEmpty = {}
        const result = imEmpty.reduce(() => {}, "I am Groot")
        expect(result).toEqual("I am Groot")
    })
})

describe('getCharCount function', () => {
    it('should count letters in an array of 3 strings', () => {
        const result = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount()
        expect(result).toEqual({
            C: 3, h: 3, a: 5,
            r: 5, m: 2, n: 2,
            d: 2, e: 3, l: 1,
            o: 1, i: 1, z: 1
        })
    })
    it('should handle an empty array', () => {
        const result = [].getCharCount()
        expect(result).toEqual({})
    })
    it('should count characters in empty strings', () => {
        const result = ["Pallet", "", "Pewter", "", "Saffron"].getCharCount()
        expect(result).toEqual({
            P: 2, a: 2, l: 2,
            e: 3, t: 2, w: 1,
            r: 2, S: 1, f: 2,
            o: 1, n: 1
        })
    })
})

describe('getMostCommon function', () => {
    it('should return a number as the most common', () => {
        const result = [9,8,7,8,7,7,7].getMostCommon()
        expect(result).toEqual(7)
    })
    it('should return a string as the most common', () => {
				const arr =  ["Batman", 8,7, "Batman", "Robin"]
        const result = arr.getMostCommon()
        expect(result).toEqual("Batman")
    })
    it('should return first element if all equally common', () => {
        const types = ["grass", "poison", "fire", "flying", "water", "bug"]
        const result = types.getMostCommon()
        expect(result).toEqual("grass")
    })
    it('should return null on an empty array', () => {
        const result = [].getMostCommon()
        expect(result).toEqual(null)
    })
})

describe('removeDupes function', () => {
    it('should remove 2 sets of duplicate numbers', () => {
        const data = [9,8,7,8,7,7,7]
        data.removeDupes()
        expect(data).toEqual([9])
    })
    it('should remove 1 set of duplicate strings', () => {
        const data = ["ice", "electric", "psychic", "ice", "ground", "ice"]
        data.removeDupes()
        expect(data).toEqual(["electric", "psychic", "ground"])
    })
    it('should remove duplicate boolean values', () => {
        const data = ["grass", false, "poison", "electric", false]
        data.removeDupes()
        expect(data).toEqual(["grass", "poison", "electric"])
    })
    it('shouldn\'t remove anything from an array with no dups', () => {
        const data = ["Pewter", "Saffron", "Vermilion", "Veridian"]
        data.removeDupes()
        expect(data).toEqual(["Pewter", "Saffron", "Vermilion", "Veridian"])
    })
    it('should leave an empty array unchanged', () => {
        const data = []
        data.removeDupes()
        expect(data).toEqual([])
    })
})

describe('getNext function', () => {
  it('should iterate through 3 elements', () => {
    const arr = ['Edna', 'Optimus', 'Minion'];
    let result = arr.getNext();
    expect(result).toEqual('Edna');
    expect(arr.getNext()).toEqual('Optimus');
    expect(arr.getNext()).toEqual('Minion');
  });
  it('should return to beginning once done', () => {
    const arr = [9, 80, 12, 2];
    expect(arr.getNext()).toEqual(9);
    expect(arr.getNext()).toEqual(80);
    expect(arr.getNext()).toEqual(12);
    expect(arr.getNext()).toEqual(2);
    expect(arr.getNext()).toEqual(9);
    expect(arr.getNext()).toEqual(80);
  });
  it('should return undefined for an empty array', () => {
    const arr = [];
    expect(arr.getNext()).toEqual(undefined);
  });
  it('should iterate through one element', () => {
    const arr = ['Ironman'];
    expect(arr.getNext()).toEqual('Ironman');
    expect(arr.getNext()).toEqual('Ironman');
  });
  it(`shouldn't iterate`, () => {
    const arr = []
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
  })
});

describe('setMaxSize prototype', () => {
  it('maxSize should stay four', () => {
    const arr = ['Michelangelo', 'Leonardo', 'Raphael'];
    arr.setMaxSize(4);
    arr.push('Donatello')
    arr.setMaxSize(3)
    arr.push('Shredder');
    arr.setMaxSize(1)
    arr.push('Splinter')
    expect(arr.length).toEqual(4)
  });
  it('maxSize should increase', () => {
    const arr = ['Michelangelo']
    arr.setMaxSize(2)
    arr.push('Donatello')
    expect(arr.length).toEqual(2)
  })
  it ('maxSize keeps array empty', () => {
    const arr = []
    arr.setMaxSize(0)
    arr.push('M', 'L', 'R')
    expect(arr.length).toEqual(0)
  })
});

describe('tiredForEach function', () => {
    jest.useFakeTimers()
    it('should call callback immediately when not tired', () => {
        const callback = jest.fn()
        const arr = ["Edna", "Optimus", "Minion"]
        arr.tiredForEach(callback, 200)
        expect(callback).toHaveBeenCalled()
    })
    it('should not run function before time has passed', () => {
        const callback = jest.fn()
        const callback2 = jest.fn()
        const arr = ["Edna", "Optimus", "Minion"]
        arr.tiredForEach(callback, 200)
        arr.tiredForEach(callback2, 200)
        expect(callback2).not.toHaveBeenCalled()
    })
    it('should work again once time has passed', () => {
        const callback = jest.fn()
        const arr = ["Edna", "Optimus", "Minion"]
        arr.tiredForEach(callback, 200)
        jest.advanceTimersByTime(200)
        arr.tiredForEach(callback, 200)
        expect(callback).toHaveBeenCalledTimes(6)
    })
})

jest.mock('request')
const request = require('request')
const lessons = require('./printLessonTitles')

describe('lessons', ()=>{
    test (`console log should not be called if lessons `, ()=>{
        request.mockClear()
        lessons.printLessons()
        expect(request.mock.calls.length).toEqual(1)
        const firstCall = request.mock.calls[0]
        expect(firstCall[0]).toEqual('https://c0d3.com/api/lessons')
    })

    test('console.log should be called once if length of lessons array is 1', ()=>{
        request.mockClear()
        lessons.printLessons()
        console.log = jest.fn()
        request.mock.calls[0][1]({},{}, JSON.stringify([
        {
            title: 'testing'
        }
        ]))
        expect(request.mock.calls.length).toEqual(1)
        expect(console.log.mock.calls[0][0]).toEqual('testing')
    })

    test('console.log should return 3 times if lessons array has 3 elements', ()=>{
        request.mockClear()
        lessons.printLessons()

        console.log = jest.fn()
        request.mock.calls[0][1]({},{},JSON.stringify([
            {
                title: "Testing1"
            },
            {
                title: 'Testing2'
            },
            {
                title: 'Testing3'
            }
        ]))
        expect(console.log.mock.calls.length).toEqual(3)
        expect(console.log.mock.calls[0][0]).toEqual('Testing1')
        expect(console.log.mock.calls[1][0]).toEqual('Testing2')
        expect(console.log.mock.calls[2][0]).toEqual('Testing3')
    })
})
