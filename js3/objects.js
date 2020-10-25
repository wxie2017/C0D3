//js objects
//solution file

const allFuns = {} // define the test object

//Write a function called mergeArrays that combines two arrays into one.
const mergeArrays = (a1, a2) => {

    return [...a1, ...a2]
}

//Write a function called firstLongerThan that finds the first string in
//an array longer than the given number.
const firstLongerThan = (a, n) => {
    return a.find((e) => {
        return (e.length > n)
    })
}

//Write a function called getReturnValues that takes in an array of functions,
//and returns an array of values returned by the functions.
const getReturnValues = (af) => {
    return af.map((e) => {return e()})
}

//Write a function called zeroSquare that takes in a number, and returns a square
//two-dimensional array with the input number rows and columns filled with zeros.
const nArray = (n, result=[]) => {
    if (n <= result.length) {
        return result
    }

    result.push(0)
    return nArray(n, result)
}

const zeroSquare = (n, result=[]) => {
    if (n <= result.length) {
        return result
    }

    result.push(nArray(n))
    return zeroSquare(n, result)
}

//Write a function called addKV that takes in an object,
//2 strings (key and value), and adds a new key and value to an object.
const addKV = (obj, key, value) => {
    if (key !== "") {
        obj[key] = value
    }

    return obj
}

//Write a function called filterNonKeys that filters an array to
//only include strings that are also keys in a given object.
const filterNonKeys = (a, obj) => {
    return a.filter((e) => {
        return (obj[e] !== undefined)
    })
}

//Write a function called addDescriptions that adds a description
//key to each object in an array. The description should go with
//the name that matches the key in the input object.
const addDescriptions = (a_obj, obj) => {
    a_obj.forEach((e) => {
        e["description"] = obj[e.name]
    })

    return a_obj
}

//Write a function called countOccurrences that returns an object
//that counts how many times each item occurs in an array.
const countOccurrences = (a) => {
    return a.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1
        return acc
    }, {})
}

//Write a function called longestString that finds the longest
//value string in an object.
const longestString = (o) => {
    const a = Object.values(o)
    return longest(a)
}

const longest = (a, i=0, result="") => {
    if (i >= a.length) {
        return result
    }

    if (a[i].length > result.length) {
        result = a[i]
    }

    return (a, i+1, result)
}

//Write a function called keyOfLongestString that finds the
//longest value string but returns its key.
const keyOfLongestString = (o) => {
    const longestValue = longestString(o)
    return keyOfValue(o, longestValue)
}

const keyOfValue = (o, v) => {
    const entry = Object.entries(o)
    return entry.find((e) => {
        return (e[1] === v)
    })[0]
}

//Use your keyOfLongestString function to write a function called removeLongestString.
const removeLongestString = (o) => {
    delete(o[keyOfLongestString(o)])
    return o
}

//Write a function called commas that returns a string of all of an object's
//values separated by commas.
const commas = (o) => {
    const values = Object.values(o)
    return values.reduce((s, e, i) => {
        if (i === 0) {
            return `${e}`
        }

        return `${s}, ${e}`
    }, "")
}

//Write a function called headers that joins all of an object's keys inside <h1> tags.
const headers = (o) => {
    const keys = Object.keys(o).reduce((s, e) => {
        return `${s}<h1>${e}</h1>`
    }, "")

    return keys
}

//Write a forEach function for objects.
Object.prototype.forEach = function(cb, i=0, e=Object.entries(this)) {
    if (i >= e.length) {
        return
    }

    cb(e[i][0], e[i][1], i, this)
    return this.forEach(cb, i+1)
}

//Write a filter function for objects.
Object.prototype.filter = function(cb, result={}, i=0, keys=Object.keys(this)) {
  if ( i === keys.length ) return result
  const currentKey = keys[i]
  const element = cb( currentKey , this[currentKey])
  if ( element === true ) {
      result[currentKey] = this[currentKey]
  }
  return this.filter(cb, result, i+1, keys)
}

//Write a reduce function for objects.
Object.prototype.reduce = function(cb, acc, i=0, keys=Object.keys(this)) {
    if (i === keys.length) return acc
    const currentKey = keys[i]
    const element = cb(acc, currentKey, this[currentKey], i)
    return this.reduce(cb, element, i+1, keys)
}

//Write a getCharCount prototype function for arrays of strings
//that returns an object of character counts:
const addChar = (map, s, i=0) => {
    if (i === s.length) return map

    const letter = s[i]
    map[letter] = (map[letter] || 0) + 1

    return addChar(map, s, i+1)
}

Array.prototype.getCharCount = function() {
    return this.reduce((acc, e) => {
        return addChar(acc, e)
    }, {})
}

//Write a getMostCommon prototype function for arrays
//that returns the most common element.
Array.prototype.getMostCommon = function() {
    const obj = this.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1
        return acc
    }, {})

    const mostCommon = Object.entries(obj).reduce((acc, e) => {
        const element = e[0]
        const count = e[1]

        if (count > acc[1]) {
            if (parseInt(element)) {
	        return [parseInt(element), count];
	    }
            return e
        }

        return acc
    }, [null, 0])

    return mostCommon[0]
}

//Write a removeDupes prototype function for arrays
//that removes duplicate elements from the array.
Array.prototype.removeDupes = function() {
    const obj = this.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1
        return acc
    }, {})

    const remove = (i=0) => {
	if (i === this.length) {
            return
        }

        if(obj[this[i]] === 1) {
	    return remove(i + 1)
	}

        this.splice(i, 1)
	return remove(i)
    }

    remove()
}

//Write a getNext prototype function for arrays that
//returns the next element of the array.
Array.prototype.getNext = function() {
    const index = this.indexCounter || 0
    this.indexCounter = (index + 1) % this.length
    return this[index]
}

//Write an Array setMaxSize prototype function that givesarrays
//a max length beyond which new elements can no longer be pushed.
Array.prototype.setMaxSize = function(max) {
    this.oldPush = this.push
    this.push = (newElement) => {
        if (this.length < max) {
            return this.oldPush(newElement)
        }
        return this.length
    }
}

//Write a tiredForEach prototype function that runs a function on
//each element of an array, but makes the user wait a specified
//amount of time before calling it again.
Array.prototype.tiredForEach = function(cb, t) {
    if(this.isTired) {
        return console.log(`Too tired. Please wait ${this.waitTime}ms.`)
    }
    this.isTired = true
    this.waitTime = t

    setTimeout(() => {
        this.isTired = false
    }, t)
    return this.forEach(cb)
}

//Send a request to https://c0d3.com/api/lessons and console.log all the titles.
module.exports = {
  printLessons: () => {
      const request = require('request')

      request('https://c0d3.com/api/lessons', (err, res, body) => {
          const parsedJson = JSON.parse(body)
          parsedJson.forEach((thisLesson) => {
              console.log(thisLesson.title)
          })
      })
  }
}




allFuns.headers = headers
allFuns.commas = commas
allFuns.removeLongestString = removeLongestString
allFuns.keyOfLongestString = keyOfLongestString
allFuns.longestString = longestString
allFuns.countOccurrences = countOccurrences
allFuns.addDescriptions = addDescriptions
allFuns.filterNonKeys = filterNonKeys
allFuns.addKV = addKV
allFuns.zeroSquare = zeroSquare
allFuns.getReturnValues = getReturnValues
allFuns.firstLongerThan = firstLongerThan
allFuns.mergeArrays = mergeArrays


module.exports = allFuns // end of test
