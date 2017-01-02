import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/main.js',
  dest: 'dist/contours.js',
  format: 'umd',
  moduleName: 'contours',
  plugins: [ buble() ]
}
