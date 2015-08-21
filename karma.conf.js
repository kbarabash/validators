// Karma configuration
module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [{
            pattern: 'tests.webpack.js',
            watched: false
        }],
        reporters: ['mocha'],
        frameworks: ['mocha'],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        singleRun: true,
        webpack: {
            module: {
                loaders: [{
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: /(node_modules|bower_components)/
                }]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};
