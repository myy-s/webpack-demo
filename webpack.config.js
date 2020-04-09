const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base')
const path = require("path");

module.exports = {
    ...base,
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        }, ],
    },
};