const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});
module.exports = {
    watch : true,
    entry: {
        index: './public/js/index.js'
    },
    output: {
        path: path.resolve(process.cwd(), './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            loader: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
        // new webpack.ProvidePlugin({
        //     $ : 'jquery',
        //     jquery : 'jquery'
        // })
    ],
}