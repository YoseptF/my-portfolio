const path = require('path');

module.exports = {
  entry: [path.resolve('assets', 'js', 'main.js')],
  output: {
    path: path.resolve('static', 'js'),
    filename: 'bundle.js',
  },
};