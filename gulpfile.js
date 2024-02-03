import gulp from 'gulp'
import babel from 'gulp-babel'
import concat from 'gulp-concat'


function transpileIndex(){
    return gulp.src('node_modules/openai/index.mjs')
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: true
        }))
        .pipe(concat('index.mjs'))
        .pipe(gulp.dest('node_modules/openai/'))
}

function transpileCore(){
    return gulp.src('node_modules/openai/core.mjs')
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: true
        }))
        .pipe(concat('core.mjs'))
        .pipe(gulp.dest('node_modules/openai/'))
}

function transpilePag(){
    return gulp.src('node_modules/openai/pagination.mjs')
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: true
        }))
        .pipe(concat('pagination.mjs'))
        .pipe(gulp.dest('node_modules/openai/'))
}

function transpileError(){
    return gulp.src('node_modules/openai/error.mjs')
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: true
        }))
        .pipe(concat('error.mjs'))
        .pipe(gulp.dest('node_modules/openai/'))
}

function transpileUploads(){
    return gulp.src('node_modules/openai/uploads.mjs')
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: true
        }))
        .pipe(concat('uploads.mjs'))
        .pipe(gulp.dest('node_modules/openai/'))
}

function transpileStreaming(){
    return gulp.src('node_modules/openai/streaming.mjs')
        .pipe(babel({
            presets: ['@babel/preset-env'],
            comments: true
        }))
        .pipe(concat('streaming.mjs'))
        .pipe(gulp.dest('node_modules/openai/'))
}

gulp.task('default', gulp.series(transpileCore,transpileError,transpilePag,transpileStreaming,transpileUploads,transpileIndex))
// module.exports = series(transpileOpenAI)