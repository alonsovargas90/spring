const 
// Dependencies.
path               = require('path'),
webpack            = require('webpack'),
// Pluggins.
ExtractTextPlugin  = require('extract-text-webpack-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./app.js'],
  output: {
    filename: '../src/main/resources/static/js/bundle.js'
  },
  devServer: {
	    inline:true,
	    port: 9999
	  },
  module: {

    rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'autoprefixer-loader', 'sass-loader']
            })
        },
        {
            test: /\.(ttf|woff|woff2|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            include: [/node_modules\/font-awesome/,/assets\/fonts/],
            loader: 'url-loader?limit=50&name=../src/main/resources/static/fonts/[name].[ext]'
        },
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '../src/main/resources/static/css/[name].bundle.css',
      allChunks: true,
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
  ],
};