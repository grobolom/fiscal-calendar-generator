var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './web/src/app.js',
    output: { path: __dirname, filename: 'web/js/bundle.js' },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
};
