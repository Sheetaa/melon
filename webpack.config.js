/**
 * @file webpack 配置文件
 * @author Sheeta(wuhayao@gmail.com)
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    resolve: {
        root: [
            path.resolve(__dirname, 'node_modules')
        ],
        alias: {},
        extensions: ['', '.js', '.styl']
    },
    entry: {
        vendor: [],
        // 这里如果不写成数组的形式会出现问题Error: a dependency to an entry point is not allowed
        // 解决办法https://github.com/webpack/webpack/issues/300
        // Alert: ['./Alert'],
        // BoxGroup: ['./BoxGroup'],
        // Breadcrumb: ['./Breadcrumb'],
        // Button: ['./Button'],
        // Card: ['./Card'],
        // Confirm: './Confirm',
        // Dialog: ['./Dialog'],
        // Icon: ['./Icon'],
        // Link: ['./Link'],
        // Mask: ['./Mask'],
        // Pager: ['./Pager'],
        // Progress: ['./Progress'],
        // Region: ['./Region'],
        // ScrollView: ['./ScrollView'],
        // Select: ['./Select'],
        // SelectableTable: ['./SelectableTable'],
        // Slider: ['./Slider'],
        // SnackBar: ['./SnackBar'],
        // Table: ['./Table'],
        // TextBox: ['./TextBox'],
        // Title: ['./Title'],
        // Toggle: ['./Toggle'],
        // ToolBar: ['./ToolBar'],
        // Tooltip: ['./Tooltip'],
        // Tree: ['./Tree'],
        // Uploader: ['./Uploader'],
        // Zippy: ['./Zippy']
        Card: ['./Card']
    },
    output: {
        path: path.join(__dirname, 'output'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'es2015-loose', 'react', 'stage-1'],
                    plugins: [
                        'external-helpers',
                        'transform-es2015-modules-umd',
                        'transform-es3-property-literals',
                        'transform-es3-member-expression-literals'
                    ]
                }
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
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     }
        // })
    ],
    externals: [
        'react',
        'react-dom',
        'react-motion',
        'melon-core'
    ]
};
