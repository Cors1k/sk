'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass:mw', function () {
  return gulp.src('./app/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('../../resource/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', gulp.series('sass:mw'));
});