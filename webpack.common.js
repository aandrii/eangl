const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

  module.exports = {
   
    entry:  './src/index.js',
       
    output: {        
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
            
    /* output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }, */
    
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: ["node_modules"],
                use: [
                    'babel-loader' , 
                    'eslint-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader" 
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: ["node_modules"],
               /*  use: [
                'file-loader'
                ] */
                use: {
                    loader: 'file-loader',
                    options: {
                        //limit: 8000,
                        //pablicPath: 'img/',
                        outputPath: 'img/',
                        name: '[name].[ext]'
                    }
                }
            }, 
            
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: ["node_modules"],
                use: [
                    'file-loader'
                ]
            }
        ]
      },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),     
      new HtmlWebpackPlugin({
        template: './src/index.html'       
      }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ]
  };