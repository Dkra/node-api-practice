const fs = require('fs');

module.exports = () => {
    const myReadstream = fs.createReadStream(__dirname + '/buffer.js', 'utf8')

    myReadstream.on('data', (chunk) => {
        console.log('new chunk recied:');
        console.log(chunk);
    })
}

