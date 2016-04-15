module.exports = {
  entry: [
    './source/index.js',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|jpeg|gif|woff|svg)$/, loader: 'file-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
