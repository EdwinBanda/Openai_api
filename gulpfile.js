// import gulp from 'gulp'
// import babel from 'gulp-babel'
// import concat from 'gulp-concat'

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const {series} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');


function transpileIndex(){
    return gulp.src('node_modules/openai/index.mjs')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: false
        }))
        .pipe(concat('index.mjs'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('/node_modules/openai/'))
}



function transpileCore(){
    return gulp.src('node_modules/openai/core.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: true
        }))
        .pipe(concat('core.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('node_modules/openai/'))
}

// function transpilePag(){
//     return gulp.src('node_modules/openai/pagination.mjs')
//         .pipe(babel({
//             presets: ['@babel/preset-env'],
//             comments: true
//         }))
//         .pipe(concat('pagination.mjs'))
//         .pipe(gulp.dest('node_modules/openai/'))
// }

// function transpileError(){
//     return gulp.src('node_modules/openai/error.mjs')
//         .pipe(babel({
//             presets: ['@babel/preset-env'],
//             comments: true
//         }))
//         .pipe(concat('error.mjs'))
//         .pipe(gulp.dest('node_modules/openai/'))
// }

// function transpileUploads(){
//     return gulp.src('node_modules/openai/uploads.mjs')
//         .pipe(babel({
//             presets: ['@babel/preset-env'],
//             comments: true
//         }))
//         .pipe(concat('uploads.mjs'))
//         .pipe(gulp.dest('node_modules/openai/'))
// }

function transpileStreaming(){
    return gulp.src('node_modules/openai/streaming.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: true
        }))
        .pipe(concat('streaming.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('node_modules/openai/'))
}

// gulp.task('default', gulp.series(traspileIndex))
module.exports.default = series(transpileStreaming)