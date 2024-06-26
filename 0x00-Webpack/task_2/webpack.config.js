const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  performance: {
    maxAssetSize: 1000000,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
	use: ["style-loader", "css-loader"],
      },
      {
	test: /\.(gif|png|jpe?g|svg)$/i,
	type: 'asset/resource',
      },
    ]
  },
};
