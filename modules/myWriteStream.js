const fs = require('fs');

module.exports = () => {
    const myReadstream = fs.createReadStream(__dirname + '/buffer.js', 'utf8')
    const myWritestream = fs.createWriteStream(__dirname + '/myWriteSteam.txt', 'utf8')

    myReadstream.on('data', (chunk) => {
        console.log('new chunk recied:');
        console.log(chunk);
        myWritestream.write(chunk)
    })
}

