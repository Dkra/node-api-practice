/*
*   Global Objects
*/

module.exports = () => {
  console.log('====== Global Module =====')
  /*
  *   Buffer
  */
  
  /*
  *   __dirname, __filename
  */
  console.log('__dirname:', __dirname)
  console.log('__filename:', __filename)
 

  /*
  *   console
  */
  console.log('hello world');
  // Prints: hello world, to stdout
  console.log('hello %s', 'world');
  // Prints: hello world, to stdout
  // console.error(new Error('Whoops, something bad happened'));
  // Prints: [Error: Whoops, something bad happened], to stderr

  const name = 'Will Robinson';
  console.warn(`Danger ${name}! Danger!`);
  // Prints: Danger Will Robinson! Danger!, to stderr

  /*
  *   global (The global namespace object)
  */
  // In Node.js this is different.
  // The top-level scope is not the global scope;
  // var something inside a Node.js module will be local to that module
  // console.log('global:', global)

  /*
  *   module
  */


  /*
  *   process
  */


  /*
  *   require()
  */


  /*
  *   require.cache
  */


  /*
  *   require.resolve()
  */
  
  // Use the internal require() machinery to look up the location of a module, but rather than loading the module,
  // just return the resolved filename.
  console.log('require.resolve("../package.json"):', require.resolve('../package.json'))


  /*
  *   Timers
  */

  // setImmediate, clearImmediate
  // setInterval, clearInterval
  // setTimeout, clearTimeout

}