import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: ['./src/index.js', './src/style.css'],
  output: {
    path: path.resolve(dirname, 'build/'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: false,
    open: true,
  },
};
