const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
    filename: '[name].[hash].js' /* add a hash to each filename for caching and cache busting */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        /* extract all css into a single file named by the ExtractTextPlugin (style.css) */
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
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
