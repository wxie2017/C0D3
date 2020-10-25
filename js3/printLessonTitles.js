//js objects
//solution file

const allFuns = {} // define the test object


//Send a request to https://c0d3.com/api/lessons
module.exports = {
    printLessons: () => {
        const request = require('request')
        const options = {
            url: 'https://c0d3.com/api/lessons',
            headers: {
                'Access-Control-Allow-Origin': 'https://c0d3.com/'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);

                //console.log all the titles
                parsedJson.forEach((thisLesson) => {
                    console.log(thisLesson.title)
                })

                //write all the titles into a file called lessons.html
                const titleArray = parsedJson.map((thisLesson) => {
	            return thisLesson.title
	        })

	        const titles = titleArray.reduce((acc, thisTitle) => {
	            return `${acc}<h1>${thisTitle}</h1>`
	        }, '')

                const fs = require('fs')
	        fs.writeFile('lessons.html', titles, ()=>{})
            }
        }

        request(options, callback);
    }
}

//observe the API of pokemon
const request = require('request')

request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
    console.log(data)
    const parsedJson = JSON.parse(data)
    console.log(parsedJson)
})

//observe the API of countries
request('https://api.openaq.org/v1/countries', (err, res, data) => {
    console.log(data)
    const parsedJson = JSON.parse(data)
    console.log(parsedJson)
})


//allFuns.printLessons = printLessons

module.exports = allFuns // end of test
