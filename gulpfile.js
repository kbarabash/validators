var gulp = require('gulp');
var gutil = require('gulp-util');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var webpack = require('webpack');
var devWebpackConfig = require('./webpack.dev.config.js');
var prodWebpackConfig = require('./webpack.production.config.js');

gulp.task('test', function() {
    return gulp.src('tests/test.js')
        .pipe(jasmine({
            reporter: new reporters.JUnitXmlReporter()
        }));
});

var buildScript = function(config, callback) {
    webpack(config, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[build]', stats.toString({
            // output options
        }));
        callback();
    });
};

gulp.task('serve', function(callback) {
    buildScript(devWebpackConfig, callback);
});

gulp.task('build', function(callback) {
    buildScript(prodWebpackConfig, callback);
});
