var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('/public/build/common.js');

module.exports = {
    entry: {
        index:__dirname+'/src/index.js'
    },
    output: {
        path: __dirname,
        filename: '/public/build/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015','react'],
                cacheDirectory: true
            },
            exclude: /node_modules/,
            
        },{
            test: /\.scss$/,
            loaders: ['style!css!sass!']
        }]
    },
    plugins: [commonsPlugin]
};