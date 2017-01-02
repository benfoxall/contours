const test = require('tape')
const data = require('./data')
const contours = require('../dist/contours')

test('dot', t => {
  t.plan(2)

  const found = contours(data.dot)

  t.same(found.length, 1, 'finds a single contour')

  t.same(found[0], [4], 'the first contour is correct')

})


test('square', t => {
  t.plan(2)

  const found = contours(data.square)

  t.same(found.length, 1, 'finds a single contour')

  t.same(found[0], [ 5, 6, 10, 9 ], 'the first contour is correct')

})
