/*
*   Process
*/

module.exports = () => {
  console.log('====== Process Module =====')
  /*
  *   Process
  */
  // The process object is a global that provides information about, and control over, the current Node.js process.
  // As a global, it is always available to Node.js applications without using require().


  /*
  *   Event: exit
  */
  // The 'exit' event is emitted when the Node.js process is about to exit as a result of either:
  // The process.exit() method being called explicitly;
  // The Node.js event loop no longer having any additional work to perform.

  process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
  });

  // synchronous operations only
  process.on('exit', (code) => {
    setTimeout(() => {
      console.log('This will not run');
    }, 0);
  });

  /*
  *   Signal Events
  */

  // Begin reading from stdin so the process does not exit.
  // process.stdin.resume();

  // Press <Ctrl>-C to trigger the callback below
  // process.on('SIGINT', () => {
  //   console.log('Received SIGINT.  Press Control-D to exit.');
  // });

  /*
  *   Signal Events
  */
  
  // process.abort()

  // The process.abort() method causes the Node.js process to exit immediately and generate a core file.
  // process.abort()
  // console.log('after process.abort() is not execute')


  // process.arch

  // The process.arch property returns a String identifying the processor architecture that the Node.js process is currently running on.
  // For instance 'arm', 'ia32', or 'x64'.
  console.log(`This processor architecture is ${process.arch}`);


  /*
  *   Signal Events
  */

  /*
  *   Signal Events
  */

  /*
  *   Signal Events
  */
}