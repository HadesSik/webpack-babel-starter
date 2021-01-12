const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/main.js', './src/main.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [],
  devtool: 'inline-source-map',
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json']
  },
}