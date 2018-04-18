const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const WebpackConfig = {
  entry: APP_DIR + '/index.js',

  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'ReactFlash'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'stage-2', 'react']
        }
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  WebpackConfig.externals = {
    'react': 'react',
    'react-dom': 'react-dom'
  };

  WebpackConfig.plugins = [
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ];
}

module.exports = WebpackConfig;