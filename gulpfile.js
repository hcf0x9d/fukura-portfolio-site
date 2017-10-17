
const gulp        = require( 'gulp' ),
    sequence    = require( 'run-sequence' ),
    sass        = require( 'gulp-sass' );

gulp.task( 'sass', function () {

    return gulp.src( './src/css/*.scss' )
        .pipe( sass() )
        .pipe( gulp.dest( './src/css' ) );

} );

// // Watch Files For Changes & Reload
gulp.task( 'serve', function () {

    gulp.watch( './src/css/**/*.scss', [ sass, ] );

} );
