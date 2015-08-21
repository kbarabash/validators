var webpack = require('webpack');

module.exports = function(PROD) {
    var config = {
        module: {
            loaders: [{
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /(node_modules|bower_components)/
            }]
        },
        entry: {
            app: './src/index.js'
        },
        output: {
            path: './dist',
            filename: 'validators.js'
        },
        resolve: {
            extensions: ['', '.js']
        },
        plugins: PROD ? [
            new webpack.optimize.UglifyJsPlugin({minimize: true})
        ] : []
    };

    if (!PROD) {
        config.devtool = 'source-map';
        config.output.sourceMapFilename = 'validators.map';
    }
    return config;
};
