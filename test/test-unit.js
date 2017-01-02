const test = require('tape')
const data = require('./data')
const contours = require('../dist/contours')

test('trace contour', t => {
  t.plan(2)

  t.same(contours._.traceContour(
    data.square, 5
  ), [5, 6, 10, 9])

  t.same(contours._.traceContour(
    data.dot, 4
  ), [4])
})



test('neighbours', t => {
  t.plan(2)

  t.same(
    contours._.neighbours(
      {width: 4, height: 4}, 5, 0
    ),
    [
      0, 1, 2, 6, 10, 9, 8, 4
    ],
    'should give neighbours'
  )

  t.same(
    contours._.neighbours(
      {width: 4, height: 4}, 5, 1
    ),
    [
      1, 2, 6, 10, 9, 8, 4, 0
    ],
    'should give offset neighbours'
  )

})

test('neighbours edge', t => {
  t.plan(1)

  t.same(
    contours._.neighbours(
      {width: 4, height: 4}, 0, 0
    ),
    [
      -1, -4, -3, 1, 5, 4, -1, -1
    ],
    'should give neighbours'
  )
})

test('offset', t => {
  t.plan(1)

  t.same(
    contours._.offset([1,2,3,4,5,6],3),
    [4,5,6,1,2,3],
    'should rotate an array'
  )

})
