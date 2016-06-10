var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    bower = require('gulp-bower'),
    stylish = require('jshint-stylish');

gulp.task('bower', function() {
    return bower();
});

gulp.task('libs', function() {
    gulp.src('./assets/libs/jquery/dist/*.min.js', {
        base: './assets/libs/jquery/dist/'
    }).pipe(gulp.dest('./public/js/libs/jquery/'));
});

gulp.task('styles', function() {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
    gulp.src(['./assets/js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest('./public/js/'));
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

gulp.task('lint:server', function() {
    gulp.src(['./*.js', './routes/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('style:watch', function() {
    gulp.watch('./assets/scss/*.scss', ['styles']);
});

gulp.task('script:watch', function() {
    gulp.watch('./assets/js/*.js', ['scripts']);
});

gulp.task('default', ['bower', 'libs', 'styles', 'scripts', 'style:watch', 'script:watch', 'server:watch']);
