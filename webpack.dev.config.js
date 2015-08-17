module.exports = {
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: 'source-map',
    watch: true,
    entry: {
        app: './src/index.js'
    },
    output: {
        path: './dist',
        sourceMapFilename: 'validators.map',
        filename: 'validators.js'
    },
    resolve: {
        extensions: ['', '.js']
    }
};
