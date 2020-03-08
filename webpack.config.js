/*
 * @Author: 吴文洁
 * @Date: 2019-12-09 15:55:29
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-08 15:24:34
 * @Description: 
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: 4 });

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
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, 'src'),
        exclude: '/node_modules',
        use: 'happypack/loader?id=ts',
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
    }),
    new HappyPack({
      id: 'ts',
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            compact: true,
            cacheDirectory: true
          }
        },
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
            happyPackMode: true,
            configFile: path.join(__dirname, 'tsconfig.json')
          },
        }
      ]
    }),
  ]
}