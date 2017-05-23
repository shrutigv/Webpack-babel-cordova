const webpack = require('webpack');
const path = require('path');
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, './www/dist');
var fs = require('fs'),
    entries = fs.readdirSync('./www/src/').filter(function(file) {
        return file.match(/.*\.js$/);
    }),
    filePath = {};
entries.forEach(function(x, i) {
    i = x.replace(/\.[^/.]+$/, "");
    filePath[i + ''] = ('./www/src/' + x);
});
module.exports = {
    entry: filePath,
    output: {
        path: buildPath,
        filename: '[name].js',
        pathinfo: true
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: path.join(__dirname, 'es6'),
            query: {
                presets: ['es2015']
            },
        }]
    },
    plugins: [
       /* new webpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, './public/webpack_cached/'),
            debug: true,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })*/
    ]
};