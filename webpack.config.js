module.exports = {
  entry: [
    './source/entry.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
    ],
  },
};
