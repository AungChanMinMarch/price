require('dotenv').config();
const webpack = require('webpack')
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: './src/index.js',
    devtool: "eval-cheap-source-map",

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    resolve : {
        alias: {
            "@app": path.resolve(__dirname, 'src/')
        }

    },
    devServer:{
        // host: '192.168.100.76',
        port: process.env.PORT,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx?$/],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                }
            },{
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `./public/index.html`,
            inject: "body",
        }),
    ]
}