
// Get tasks from gulp-tasks directory
require('require-dir')('gulp-tasks');
var gulp = require('gulp');
var package = require('./package.json');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var reload = browserSync.reload;
var exec = require('child_process').exec;
var webpack = require('webpack');
var browserSync = require('browser-sync');
var sequence = require('gulp-sequence');

gulp.task('default', function(cb) {
  sequence(
    'webpack',
    'server',
    cb);

});
