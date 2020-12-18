const path = require('path');

module.exports = {
  entry: './src.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'type-check.js',
    library: 'type-check',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
};