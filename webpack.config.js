var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: [
	"babel-polyfill",
    './app/app.js'
  ],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  plugins: [
    new webpack.ProvidePlugin({
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
		new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CompressionPlugin({
			asset: "bundle.gz.js",
			algorithm: "gzip",
			test: /bundle.js$/,
			//threshold: 10240,
			minRatio: 0.8
		})
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      './app'
    ],
    alias: {
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
