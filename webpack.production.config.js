module.exports = {
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
    }
};
