var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var ENV = {
    PROD: true,
    DEV: false
};

(function build() {
    var devCompiler = webpack(webpackConfig(ENV.DEV));

    gulp.task('serve', function() {
        gulp.watch(['src/**/*.js'], ['build:dev']);
    });

    gulp.task('build:dev', function(callback) {
        devCompiler.run(function (err, stats) {
            if (err) {
                throw new gutil.PluginError('webpack', err);
            }
            gutil.log('[serve-build]', stats.toString({
                // output options
            }));
            callback();
        });
    });

    gulp.task('build', function (callback) {
        webpack(webpackConfig(ENV.PROD), function (err, stats) {
            if (err) {
                throw new gutil.PluginError('webpack', err);
            }
            gutil.log('[build]', stats.toString({
                // output options
            }));
            callback();
        });
    });
})();
