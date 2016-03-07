var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('/public/build/common.js');

module.exports = {
    entry: {
        index:__dirname+'/src/index.js',
        main:__dirname+'/src/main.js',
        // ,DirectLogin:__dirname+'/src/DirectLogin.js' //直接登录的页面入口配置 暂时用不到
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