import * as path from 'path'
import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'

import nodeExternals from 'webpack-node-externals'

const commonConfig = {
  mode: 'development' as any,
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
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

export const client = {
  ...commonConfig,
  name: 'client',
  target: 'web',
  entry: ['./src/client/index.tsx', 'webpack-hot-middleware/client'],
  devtool: 'inline-source-map',
  output: {
    ...commonConfig.output,
    filename: 'client.js'
  },
  plugins: [
    ...commonConfig.plugins,
    new AssetsPlugin({ fullPath: false, filename: 'client-assets.json' })
  ]
}
export const server = {
  ...commonConfig,
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/requestHandler.tsx',
  output: {
    ...commonConfig.output,
    filename: 'server.js',
    libraryTarget: 'commonjs2' // necessary for webpack-hot-server-middleware
  },
  plugins: [...commonConfig.plugins]
}

export default [client, server]
