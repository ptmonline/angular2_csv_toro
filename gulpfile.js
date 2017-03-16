var gulp = require("gulp");
// var less = require("gulp-less");
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// gulp.task('default', function () {
//   gulp.src('src/less/*.less')
//     .pipe(less())
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(cleanCSS({ debug: true }, function (details) {
//       console.log(details.name + ': ' + details.stats.originalSize);
//       console.log(details.name + ': ' + details.stats.minifiedSize);
//     }))
//     .pipe(gulp.dest('src/css'));
// })

// gulp.task('watch', function () {
//   gulp.watch('src/less/*.less', ['default'])
// })

var gulp = require('gulp');
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