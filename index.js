console.log('-----------------------')
const global = require('./modules/global.js');
const process = require('./modules/process.js');
const filesystem = require('./modules/filesystem.js');
const buffer = require('./modules/buffer.js');
const myReadStream = require('./modules/myReadStream.js');
const myWriteStream = require('./modules/myWriteStream.js');
const myPipeExample = require('./modules/pipe');

const childProcessExample = require('./examples/childProcessExample.js');



// myReadStream()
// myWriteStream()
myPipeExample()
// buffer();
// filesystem()
// global()
// process()
// childProcessExample()




console.log('--------------------------------')