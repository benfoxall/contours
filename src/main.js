const traceContour = (imageData, i) => {
  const start = i
  const contour = [start]

  let direction = 0
  let p = start

  let t = 20
  do {

    const n = neighbours(imageData, p, direction)
    const pIdx = n.findIndex(idx => imageData.data[idx * 4])

    direction = pIdx
    p = n[pIdx]

    if(p && p != start) {
      contour.push(p)
    }

  } while (p && p != start && t-- > 0)


  return contour
}


// list of neighbours to visit
const neighbours = (image, i, start) => {
  const w = image.width

  const mask = []

  if((i % w) === 0) {
    mask[0] = mask[6] = mask[7] = -1
  }

  if(((i+1) % w) === 0) {
    mask[2] = mask[3] = mask[4] = -1
  }

  // hack - vertical edging matters less because
  // it will get ignored by matching it to the source

  return offset([
    mask[0] || i - w - 1,
    mask[1] || i - w,
    mask[2] || i - w + 1,
    mask[3] || i + 1,
    mask[4] || i + w + 1,
    mask[5] || i + w,
    mask[6] || i + w - 1,
    mask[7] || i - 1
  ], start)
}

const offset = (array, by) =>
  array.map( (_v, i) =>
    array[(i + by) % array.length]
  )


function contourFinder (imageData) {

  const contours = []
  const seen = []

  for (var i = 0; i < imageData.data.length; i++) {
    if(imageData.data[i * 4] && ! seen[i]) {
      var contour = traceContour(imageData, i)
      contours.push(contour)

      // this could be a _lot_ more efficient
      contour.forEach(c => {
        seen[c] = true
      })
    }
  }

  return contours

}


// export for testing
contourFinder._ = {traceContour, neighbours, offset}

export default contourFinder
