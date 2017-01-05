exports.dot = format([
  '___',
  '_X_',
  '___'
])

exports.square = format([
  '____',
  '_XX_',
  '_XX_',
  '____'
])

exports.large_square = format([
  '__________',
  '__XXXXXX__',
  '__XXXXXX__',
  '__XXXXXX__',
  '__XXXXXX__',
  '__________'
])

exports.squares = format([
  '________',
  '_AA_____',
  '_AA__BB_',
  '_____BB_',
  '________'
])


exports.squares_edge = format([
  'XX___',
  'XX_BB',
  '___BB'
])


exports.tri = format([
  '______________',
  '__1___________',
  '__11__________',
  '__111_________',
  '__1111________',
  '__11111_______',
  '__111111______',
  '__1111111_____',
  '__11111111____',
  '______________'
])


exports.stuff = format([
  '______________________________',
  '_AA___________________________',
  '_AA_____BBBB__________________',
  '________BBBB__________________',
  '______________________________',
  '___C__________________________',
  '__CC________________DD________',
  '__CC________________DD________',
  '___CCCCC____________DD________',
  '____________________DD________',
  '_______EE___________DD________',
  '_______EE_________DDDDD_______',
  '_______EE_____________________',
  '______________________________'
])


exports.connected = format([
  '___AA____',
  '___AA____',
  '_AA__AA__',
  '_AA__AA__',
])


// ImageData-like object
function format(input) {
  const width = input[0].length
  const height = input.length
  const data = new Uint8ClampedArray(width * height * 4)

  input.join('').split('')
  .map(v => v != '_' ? 255 : 0)
  .forEach( (v, i) => {
    data[(i * 4) + 0] = v
    data[(i * 4) + 1] = v
    data[(i * 4) + 2] = v
    data[(i * 4) + 3] = 255
  })

  return {data, width, height}
}
