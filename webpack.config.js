var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        loader: "style!css?sourceMap!cssnext"
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader?name=[name].[ext]'
        // loader: 'url?limit=25000'
      },
      {
        test: /\.ttf$/,
        loader: 'url?limit=100000'
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('bundle.css')
  ]
};