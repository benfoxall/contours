# Contour Tracer

This is a basic implementation of Moore Neighbourhood contour tracing.

For more details on the algorithm/approach see [this site](http://www.imageprocessingplace.com/downloads_V3/root_downloads/tutorials/contour_tracing_Abeer_George_Ghuneim/moore.html)

```js
const output = contours(imageData)

// list of marching contours
```

## Development

```bash
yarn install #or, npm


## build dist/contours
npm run build

## run tests
npm test

## run tests on file change
npm run test:watch
```

## Status

This is at the state of "just about working". There's a few things that would make it a load more efficient, and maybe a bit nicer to use.  [Feedback](https://github.com/benfoxall/contours/issues) would be appreciated.
