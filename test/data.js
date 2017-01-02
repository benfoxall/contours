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
  '__CCC__________________D______',
  '__CCCC_________________D______',
  '___CCCCC_______________D______',
  '_______________________D______',
  '_______EEE___________DDD______',
  '_______EEE_________DDDDD______',
  '_______EEE____________________'
])

// ImageData-like object
function format(input) {
  const width = input[0].length
  const height = input.length
  const data = new Uint8ClampedArray(width * height * 4)

  input.join('').split('')
  .map(v => v != '_')
  .forEach( (v, i) => {
    data[(i * 4) + 0] = v
    data[(i * 4) + 1] = v
    data[(i * 4) + 2] = v
    data[(i * 4) + 3] = 1
  })

  return {data, width, height}
}
