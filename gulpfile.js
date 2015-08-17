var gulp = require('gulp');
var gutil = require('gulp-util');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('.webpack.config.js');

gulp.task('test', function() {
    return gulp.src('tests/test.js')
        .pipe(jasmine({
            reporter: new reporters.JUnitXmlReporter()
        }));
});

gulp.task('build', function(callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[build]', stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('serve', function(callback) {
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
    }).listen(8080, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[serve]', 'http://localhost:8080/webpack-dev-server/index.html');
        callback();
    });
});
