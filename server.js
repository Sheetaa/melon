/**
 * @file 本地调试服务器
 * @author Sheeta(wuhayao@gmail.com)
 */

/* eslint-disable no-console */
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config.dev';

const compiler = webpack(config);
const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname));

app.listen(9000, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:9000');
});
