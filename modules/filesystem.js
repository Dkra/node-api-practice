/*
*   File System
*/
const fs = require('fs');

module.exports = () => {
  console.log('====== File System Module =====')
  /*
  *   Buffer
  */

  /* Delete File */
  // fs.unlink('./test', (err) => {
  //   if (err) throw err;
  //   console.log('successfully deleted ./test');
  // });

  // Rename File
  // fs.rename('./test', './testChangeName', (err) => {
  //   if (err) throw err;
  //   console.log('renamed complete');
  // });
  
  /* Read */
  fs.appendFile('message.txt', 'data append to message.txt', (err) => {
    if (err) throw err;
    console.log('The "data append to message.txt" was appended to file! It will concat text');
  });

  /* Chmod */
  fs.chmod('./message.txt', 755, (callback) => {
    console.log('callback:', callback)
  })

  /* Create Read Stream */

  const readable = fs.createReadStream('package.json', { start: 0, end: 1 });
  
  readable.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
  })

  readable.on('readable', () => {
    console.log('readable:', readable.read());
  });
}