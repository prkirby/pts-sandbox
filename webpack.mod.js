/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const LIB_PATH = path.resolve(__dirname, 'src/_module.ts')
const BUILD_PATH = path.resolve(__dirname, 'dist')

module.exports = {

  mode: 'development',
  devtool: 'source-map',

  entry: {
    pts: LIB_PATH
  },

  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: BUILD_PATH,
    filename: 'index.js'
  },

  // devtool: 'source-map',

  // watchOptions: { poll: true }, // seems to need this for Windows Linux subsystem to watch

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      tools: path.resolve(__dirname, './src/tools/'),
      sketches: path.resolve(__dirname, './src/sketches/'),
      types: path.resolve(__dirname, './src/types/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3)$/i,
        type: 'asset',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
}
