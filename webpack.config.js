const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: ['babel-polyfill', './src/background.js'],
    main: './src/foreground.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          import: true,
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/icons', to: 'icons' },
        { from: 'src/assets/css', to: 'css' },
        { from: 'src/assets/html', to: 'html' },
        { from: 'manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
};
