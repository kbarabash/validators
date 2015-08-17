var gulp = require('gulp');
var gutil = require('gulp-util');
var jasmine = require('gulp-jasmine');
var webpack = require('webpack');
var devWebpackConfig = require('./webpack.dev.config.js');
var prodWebpackConfig = require('./webpack.production.config.js');
var notify = require('gulp-notify');

gulp.task('test', function() {
    return gulp.src('tests/test.js')
        .pipe(jasmine())
        .on('error', notify.onError({
            title: 'Jasmine Test Failed',
            message: 'One or more tests failed, see the cli for details.'
        }));
});

(function build() {
    var devCompiler = webpack(devWebpackConfig);

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
        webpack(prodWebpackConfig, function (err, stats) {
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
