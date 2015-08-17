module.exports = {
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: 'babel',
            exclude: /(node_modules|bower_components)/
        }]
    },
    entry: {
        app: ['src/index.js']
    },
    output: {
        path: "./build",
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js']
    }
};
