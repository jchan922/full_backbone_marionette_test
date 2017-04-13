var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/driver.js',
    output: {
        path: __dirname + '/static/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
            test: /\.html$/,
            loader: 'underscore-template-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'underscore'
        })
    ],
    resolve: {
        modules: [path.resolve(__dirname), "node_modules"]
    },
    resolveLoader: {
        modules: ["node_modules"],
        extensions: [".js", ".json"],
        mainFields: ["loader", "main"]
    }
};
