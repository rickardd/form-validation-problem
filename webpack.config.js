module.exports  = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: './bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}