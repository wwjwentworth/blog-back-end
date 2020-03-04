/*
 * @Author: 吴文洁
 * @Date: 2019-12-09 15:55:29
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-04 13:15:55
 * @Description: 
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/' 
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)?$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
              ],
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx', '.json'],
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'dist/index.html'),
      filename: 'index.html',
      inject: 'body',
    })
  ]
}