const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/menu.js', './src/changeCardPosition.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};