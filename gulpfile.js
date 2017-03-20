var gulp = require("gulp");
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function () {
  gulp.watch('src/sass/*.scss', ['sass'])
})
