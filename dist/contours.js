(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.contours = factory());
}(this, (function () { 'use strict';

var traceContour = function (imageData, i) {
  var start = i;
  var contour = [start];

  var direction = 0;
  var p = start;

  var t = 20;
  do {

    var n = neighbours(imageData, p, direction);
    var pIdx = n.findIndex(function (idx) { return imageData.data[idx * 4]; });

    direction = pIdx;
    p = n[pIdx];

    if(p && p != start) {
      contour.push(p);
    }

  } while (p && p != start && t-- > 0)


  return contour
};


// list of neighbours to visit
var neighbours = function (image, i, start) {
  var w = image.width;

  var mask = [];

  if((i % w) === 0) {
    mask[0] = mask[6] = mask[7] = -1;
  }

  if((i+1 % w) === 0) {
    mask[2] = mask[3] = mask[4] = -1;
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
};

var offset = function (array, by) { return array.map( function (_v, i) { return array[(i + by) % array.length]; }
  ); };


function contourFinder (imageData) {

  var contours = [];
  var seen = [];

  for (var i = 0; i < imageData.data.length; i++) {
    if(imageData.data[i * 4] && ! seen[i]) {
      var contour = traceContour(imageData, i);
      contours.push(contour);

      // this could be a _lot_ more efficient
      contour.forEach(function (c) {
        seen[c] = true;
      });
    }
  }

  return contours

}


// export for testing
contourFinder._ = {traceContour: traceContour, neighbours: neighbours, offset: offset};

return contourFinder;

})));
