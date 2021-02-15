import * as path from 'path'

import nodeExternals from 'webpack-node-externals'
import NodemonPlugin from 'nodemon-webpack-plugin'

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules']
  }
}

export const client = {
  ...config,
  name: 'client',
  target: 'web',
  entry: path.resolve(__dirname, 'src/client/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
export const server = {
  ...config,
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/server/index.ts'),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new NodemonPlugin({
      watch: path.resolve(__dirname, './dist/server.js')
    })
  ]
}

export default [client, server]
