/**
 * @file webpack 开发配置文件
 * @author Sheeta(wuhayao@gmail.com)
 */

import path from 'path';
import webpack from 'webpack';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
        './demo/index'
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    modules: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus'
            },
            {
                test: /\.(eot|svg|ttf|woff|png)$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.styl']
    },
    externals: [
        'react',
        'react-dom',
        'react-motion',
        'melon-core'
    ]
};
