const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: ['babel-polyfill', './src/background.js'],
    main: './src/entry.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/icons', to: 'icons' },
        { from: 'src/assets/css', to: 'css' },
        { from: 'src/assets/html', to: 'html' },
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'LICENSE', to: 'LICENSE' },
      ],
    }),
  ],
};
