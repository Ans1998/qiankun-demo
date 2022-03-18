const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('./package');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  devServer: {
    open: true,
    port: '7099',
    clientLogLevel: 'warning',
    disableHostCheck: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    overlay: { warnings: false, errors: true },
  },
  output: {
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};