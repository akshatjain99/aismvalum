'use strict';

var
    gulp = require('gulp'),
    sass = require('gulp-sass');;


gulp.task('sass', function() {
    console.log("Generate CSS files " + (new Date()).toString());
    return gulp.src('public/assets/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/assets/css'));

});

gulp.task('sass:watch', function() {
    console.log("Watching scss files for modifications...");
    gulp.watch('public/assets/css/*/*.scss', ['sass']);
    gulp.watch('public/assets/css/main.scss', ['sass']);

});
