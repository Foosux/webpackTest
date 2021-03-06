const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: '[name]-[id]-[hash].js'
  },
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules!autoprefixer-loader!stylus-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究!!'),
    new HtmlWebpackPlugin({
      template: __dirname + "/temp/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
    // __DEV__ 默认是 false，除非手动设置开发环境
    __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV || 'false'))
    })
  ],
}
