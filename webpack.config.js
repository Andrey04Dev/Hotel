const path = require('path');

module.exports = {
  entry: './lib/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './resources/js'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};