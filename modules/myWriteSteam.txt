/*
*   Buffer
*/
module.exports = () => {
  console.log('====== Buffer Module =====')
  
  const buf = new Buffer('hello', 'utf8'); // utf8 is default encoding
  console.log('buf:', buf)
  console.log('buf.toString():', buf.toString())
  console.log('buf.toJSON():', buf.toJSON())

  console.log('After buf.write("!!")')
  buf.write('!!')
  console.log('buf.toString():', buf.toString())

}