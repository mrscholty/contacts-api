var gulp = require('gulp');
var rename =

gulp.task('default', ['copy'], function () {
    console.log('done');
});

gulp.task('copy', function () {

    gulp.src(
        './package_production.json'
    )
        .pipe(rename('package.json'))
        .pipe(gulp.dest('./build'));

    gulp.src([
        './src/data/contacts.json',
    ])
        .pipe(gulp.dest('./build/data'));
});