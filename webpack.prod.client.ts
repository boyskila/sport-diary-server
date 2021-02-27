import * as path from 'path'
import AssetsPlugin from 'assets-webpack-plugin'

export default {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json'],
    modules: ['src', 'node_modules']
  },
  name: 'client',
  target: 'web',
  entry: './src/client/index.tsx',
  output: {
    filename: 'client.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new AssetsPlugin({ fullPath: false, filename: 'client-assets.json' })
  ]
}
