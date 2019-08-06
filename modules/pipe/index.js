/*
    const fs = require('fs');

    const myReadstream = fs.createReadStream(__dirname + '/buffer.js', 'utf8')
    const myWritestream = fs.createWriteStream(__dirname + '/myWriteSteam.txt', 'utf8')

    myReadstream.on('data', (chunk) => {
        myWritestream.write(chunk)
    })
*/

const fs = require('fs');

module.exports = () => {
    const myReadstream = fs.createReadStream(__dirname + '/a.txt', 'utf8')
    const myWritestream = fs.createWriteStream(__dirname + '/b.txt', 'utf8')

    myReadstream.pipe(myWritestream)
}


