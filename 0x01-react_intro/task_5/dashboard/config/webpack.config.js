const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    static: path.resolve('./dist'),
    compress: true,
    open: true,
    hot: true,
    port: 8564,
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      template: './dist/index.html',
      inject: false,
    })
  ]
};
