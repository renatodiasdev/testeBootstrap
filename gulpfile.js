var gulp = require('gulp'),
    cssnano = require('gulp-cssnano');

gulp.task('default', function () {
    return gulp.src('bower_components/bootstrap/dist/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('wwwroot/css/'));
});