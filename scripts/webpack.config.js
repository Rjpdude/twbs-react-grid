const path = require('path')
const rootPath = path.join(__dirname, '../')

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    demo: path.join(__dirname, 'demo/demo.tsx')
  },
  module: {
    rules: [
      {
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        },
        test: /(.*\.ts|\.tsx)$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(rootPath, 'dev-server/output')
  },
  devServer: {
    port: 7200,
    contentBase: path.join(rootPath, 'dev-server'),
    writeToDisk: false,
    compress: true,
    watchContentBase: true,
    historyApiFallback: {
      index: 'index.html'
    }
  }
}
