const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: 'development',
    entry: './client/index.js',
    // output:{
    //   path: path.resolve(__dirname, 'dist'),
    //   filename: 'index.html',
    //   publicPath: '/',
    // },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
  
  
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: 'eval-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html'
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'client'),
        publicPath: '/',
      },
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: {
        '/api/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
        '/assets/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
        '/auth/google/**': {
          target: 'http://localhost:3000/',
          secure: false,
        }
      },
    },
  }
};