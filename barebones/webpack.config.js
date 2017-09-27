const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* create array of vendor libs to use in split from bundle */
const VENDOR_LIBS = [
  'react',
  'react-dom'
]

module.exports = {
  entry: {
    bundle: './src/app.js', /* bundle.js will contain everything from app.js */
    vendor: VENDOR_LIBS /* vendor.js will contain all VENDOR_LIBS */
  },
  output: {
    path: path.resolve(__dirname, 'dist'), /* output all files to /dist directory */
    filename: '[name].[chunkhash].js' /* add a hash to each filename for caching and cache busting */
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    /*
      Create an index.html file from the src/index.html file
      and add our <script> and <link> tags to it
    */
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
