import * as path from 'path'

import nodeExternals from 'webpack-node-externals'

export default {
  mode: 'production' as any,
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
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/index.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
