const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // para o bavel entrar em açao precisa ser .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, // arquivos terminados com essas extensoes e case insensitive jpg ou jpeg
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
};
