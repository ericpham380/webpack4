const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // Loading CSS using css-loader and style-loader
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // Loading images using file-loader
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // Loading fonts using file-loader
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // Loading CSV data using csv-loader
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        // Loading XML data using xml-loader
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}