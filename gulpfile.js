var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    bower = require('gulp-bower'),
    stylish = require('jshint-stylish');

gulp.task('lint:client', function() {
    gulp.src(['./assets/js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('lint:server', function() {
    gulp.src(['./*.js', './routes/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('server:watch', function() {
    nodemon({
            script: 'server.js',
            ext: 'js',
            ignore: ['**/assets/**/*.js', '**/public/**/*.js'],
            tasks: ['lint:server']
        })
        .on('restart', function() {
            console.log('restarted!');
        });
});

gulp.task('scss', function() {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('style:watch', function() {
    gulp.watch('./assets/scss/*.scss', ['scss']);
});

gulp.task('script:watch', function() {
    gulp.watch('./assets/js/*.js', ['lint:client']);
});

gulp.task('vendors', function() {
    gulp.src('./assets/vendors/jquery/dist/*.min.js', {
        base: './assets/vendors/jquery/dist/'
    }).pipe(gulp.dest('./public/js/vendors/jquery/'));
});

gulp.task('default', ['bower', 'vendors', 'scss', 'lint:client', 'style:watch', 'script:watch', 'server:watch']);
