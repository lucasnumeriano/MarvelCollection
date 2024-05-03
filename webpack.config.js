const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/menu.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};