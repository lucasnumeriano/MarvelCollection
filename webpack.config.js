const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/menu.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};