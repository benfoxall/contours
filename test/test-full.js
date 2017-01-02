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



test('squares', t => {
  t.plan(3)

  const found = contours(data.squares)

  t.same(found.length, 2, 'finds two contours')

  t.same(found[0], [ 9, 10, 18, 17 ], 'the first contour is correct')
  t.same(found[1], [ 21, 22, 30, 29 ], 'the second contour is correct')


})


test('squares_edge', t => {
  t.plan(3)

  const found = contours(data.squares_edge)

  t.same(found.length, 2, 'finds two contours')

  t.same(found[0], [ 0,1,6,5 ], 'the first contour is correct')
  t.same(found[1], [ 8,9,14,13 ], 'the second contour is correct')


})
