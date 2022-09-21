const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {

    entry: './react/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        clean: true
    },

    resolve : {
        alias: {
            "app": path.resolve(__dirname, 'react/')
        }

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
            filename: "index.html",
            template: "./public/index.html",
            inject: "body",
        }),
    ]
}
module.exports = (env, argv)=> {
    if (argv.mode === 'development') {
        config.devtool = 'eval-cheap-source-map';
    }
    return config;
}