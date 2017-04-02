// var gulp = require("gulp");
// var cleanCSS = require('gulp-clean-css');
// var rename = require('gulp-rename');
// var sass = require('gulp-sass');
// var server = require( 'gulp-develop-server' )
// var jshint = require('gulp-jshint');
//
// gulp.task('sass', function () {
//   return gulp.src('src/sass/*.scss')
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('src/css'));
// });
//
// gulp.task('watch', function () {
//   gulp.watch('src/sass/*.scss', ['sass'])
// })
//
//
// gulp.task('lint', function() {
//   return gulp.src('app.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });
//
// 	// run server
// gulp.task( 'server:start', function() {
//     server.listen( { path: './app.js' } );
// });
//
// // restart server if app.js changed
// gulp.task( 'server:restart', function() {
//     gulp.watch( [ './app.js' ], server.restart );
// });
//
// gulp.task('default', ['lint','server:start','server:restart', 'watch']);
var gulp   = require( 'gulp' ),
    server = require( 'gulp-develop-server' )
    jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src('server.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

    // run server
gulp.task( 'server:start', function() {
    server.listen( { path: './server.js' } );
});

// restart server if app.js changed
gulp.task( 'server:restart', function() {
    gulp.watch( [ './server.js' ], server.restart );
});

gulp.task('default', ['lint','server:start','server:restart']);
