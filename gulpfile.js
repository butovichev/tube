'use strict';
 
var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    rigger = require('gulp-rigger'),
    // watch = require('gulp-watch'),
    // prefixer = require('gulp-autoprefixer'),
    // uglify = require('gulp-uglify'),
    scss = require('gulp-sass'),
    // sourcemaps = require('gulp-sourcemaps'),
    // cssmin = require('gulp-minify-css'),
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf');
    // browserSync = require("browser-sync"),
    // reload = browserSync.reload;

var path = {
    build: { //path to build files
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //path to sources
        html: 'src/*.html', 
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', 
        fonts: 'src/fonts/**/*.*',
        scss: 'src/*.scss',
    },
    watch: { //change files
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

// var config = {
//     server: {
//         baseDir: "./build"
//     },
//     tunnel: true,
//     host: 'localhost',
//     port: 9000,
//     logPrefix: "Frontend_Devil"
// };

// build html
gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        //.pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

// build html
gulp.task('css:build', function () {
  return gulp.src(path.src.scss)
    .pipe(rigger())
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest(path.build.css));
});

// clean build
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

// run all tasks
gulp.task('start', function(done) {
    runSequence('clean', 'html:build', 'css:build', function() {
        done();
    });
});