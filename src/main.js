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
  return offset([
    i - w - 1,
    i - w,
    i - w + 1,
    i + 1,
    i + w + 1,
    i + w,
    i + w - 1,
    i - 1
  ], start)
}

const offset = (array, by) =>
  array.map( (_v, i) =>
    array[(i + by) % array.length]
  )


function contourFinder (imageData) {

  const contours = []

  for (var i = 0; i < imageData.data.length; i++) {
    if(imageData.data[i * 4]) {

      contours.push(traceContour(imageData, i))

      // for now, break on first contour
      // because we're not marking which ones have been tested
      break
    }
  }

  return contours

}


// export for testing
contourFinder._ = {traceContour, neighbours, offset}

export default contourFinder
