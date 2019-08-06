/*
*   Child Process Example
*/

var c_process = require('child_process')

module.exports = () => {
  console.log('====== Child Process Example =====')
  
  /* exec */
  c_process.exec(`cat ${__filename}`, (err, stdout, stderr) => {
    console.log('we got our catted file', stdout)
  })

  console.log('I will print before child process, cuz child process is Async')
}