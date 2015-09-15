var path = require('path');
var webpack = require('webpack');
var cssnext  = require('postcss-cssnext');
var postcssImport = require('postcss-import');

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
        loader: "style-loader!css-loader?sourceMap!postcss-loader"
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
  postcss: function() {
    return [
      cssnext(),
      postcssImport()
    ];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
