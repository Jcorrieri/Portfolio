const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const articlesDir = path.resolve(__dirname, 'articles');
const htmlFiles = fs.readdirSync(articlesDir).filter(file => file.endsWith('.html'));

const htmlPlugins = htmlFiles.map(filename => {
  return new HtmlWebpackPlugin({
    template: `./articles/${filename}`,
    filename: `./articles/${filename}`,
  });
});

module.exports = {
  entry: {
    app: './js/app.js',
    study: './js/study.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './study.html',
      filename: 'study.html',
      chunks: ['app', 'study'],
    }),
    ...htmlPlugins,
  ],
};
