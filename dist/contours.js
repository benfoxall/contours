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
};

var offset = function (array, by) { return array.map( function (_v, i) { return array[(i + by) % array.length]; }
  ); };


function contourFinder (imageData) {

  var contours = [];

  for (var i = 0; i < imageData.data.length; i++) {
    if(imageData.data[i * 4]) {

      contours.push(traceContour(imageData, i));

      break;
    }
  }

  return contours

}


// export for testing
contourFinder._ = {traceContour: traceContour, neighbours: neighbours, offset: offset};

return contourFinder;

})));
