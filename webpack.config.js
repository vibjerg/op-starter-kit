'use strict';

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var noErrorsPlugin = new webpack.NoErrorsPlugin();
var extractCss = new extractTextPlugin('../css/[name].css', {allChunks: true});

module.exports = [{
  name: 'browser',

  entry: {
    app: './src/client/app.js'
  },

  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime', 'transform-async-to-generator']
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: extractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap' +
          '!sass?sourceMap' +
          "&includePaths[]=" + path.resolve(__dirname, "./src/client/scss/") +
          "&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") +
          "&includePaths[]=" + path.resolve(__dirname, "./node_modules/sass-mediaqueries") +
          '!postcss-loader'
        )
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]_[hash]',
          prefixize: true
        })
      }
    ]
  },

  postcss: [autoprefixer({browsers: ['last 2 versions'] }) ],

  plugins: [
    extractCss,
    noErrorsPlugin
  ],

  watchOptions: {
    poll: true
  }
}];
