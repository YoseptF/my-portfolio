const path = require('path');

module.exports = {
  entry: [path.resolve('assets', 'js', 'main.js')],
  output: {
    path: path.resolve('assets', 'js'),
    filename: 'bundle.js',
  },
};