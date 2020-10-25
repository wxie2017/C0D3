//import myObj.js and myFun.js
const myObj = require('./myObj.js')
const myFun = require('./myFun.js')

console.log(Object.keys(myObj).filter(myFun))

const fs1 = require('fs')
fs1.readdir('./', (err, files) => {
  console.log(files) // files should be an array
})

const fs2 = require('fs')
fs2.readdir('./', (err, files) => {
    console.log(files.filter((e) => {
        return (e.length<10)
    }))
})

const listFiles = () => {
    const fs = require('fs')
    fs.readdir('./', (err, file) => {
        const s = file.reduce((acc, e) => {
            return `${acc}<h1>${e}</h1>`
        }, "")
        fs.writeFile('./files.html', `${s}`, ()=>{})
    })
}

const request = require('request')

// We are sending a request to a Pokemon API to get Pokemon data.
// This one actually works!
request("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20", (err, res, data) => {
  console.log(data) // data is JSON

  // We use JSON.parse to parse the JSON back into an object
  const pokeInfo = JSON.parse(data)

  console.log(pokeInfo.results) // Array of pokemon!
})
