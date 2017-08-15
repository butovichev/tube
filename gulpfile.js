'use strict';
 
var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    rigger = require('gulp-rigger'),
    htmlhint = require('gulp-htmlhint'),
    csslint = require('gulp-csslint'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    scss = require('gulp-sass'),
    // sourcemaps = require('gulp-sourcemaps'),
    // cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

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
        style: 'src/main.scss',
        img: 'src/img/**/*.*', 
        fonts: 'src/fonts/**/*.*',
        scss: 'src/*.scss',
    },
    watch: { //change files
        html: 'src/**/*.html',
        js: 'src/js/*.js',
        style: 'src/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};


var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

// build html
gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(htmlhint())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true})); 
});

// build html
gulp.task('style:build', function () {
  gulp.src(path.src.style)
    .pipe(rigger())
    .pipe(scss().on('error', scss.logError))
    // .pipe(prefixer())
    .pipe(csslint())
    // .pipe(csslint.formatter())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true})); 
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        // .pipe(sourcemaps.init())
        // .pipe(uglify())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});


gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});


gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


// clean build
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});




gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('webserver', function () {
    browserSync(config);
});


gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    // 'image:build'
]);

gulp.task('default', ['build', 'webserver', 'watch']);
// gulp.task('default', ['build']);