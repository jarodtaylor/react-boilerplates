const path = require('path');
const cssnext  = require('postcss-cssnext');
const  postcssImport = require('postcss-import');
const PATHS = {
  src: path.join(__dirname + '/src'),
  dist: path.join(__dirname + '/dist'),
};

// The "default" configuration, options that work for both
// the default build process as well as the development server
const config = {
  entry: ['babel-polyfill', path.join(PATHS.src, '/app.js')],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.dist,
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: PATHS.src,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?sourceMap!postcss-loader"
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader?name=[name].[ext]'
      },
    ]
  },
  postcss: function() {
    return [
      postcssImport({
        onImport: function (files) {
          files.forEach(this.addDependency);
        }.bind(this)
      }),
      cssnext()
    ];
  },
};

// "start" is just the name of the script in our package.json for the
// development server. Customize it here as necessary.
if(process.env.npm_lifecycle_event === 'start') {
  // We don't need or want to run hot-module-replacement code in
  // ordinary build processes, so we'll push it into the presets stack here.
  config.module.loaders[0].query.presets.push('react-hmre');

  // Configure our development server
  config.devServer = {
    contentBase: __dirname,
    hot: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  };
}

// Good to go!
module.exports = config;
