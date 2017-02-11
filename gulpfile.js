var gulp=require('gulp');
var minicss=require('gulp-minify-css');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var jshint=require('gulp-jshint');
var compass= require('gulp-compass');

gulp.task('jshint',function(){
    return gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

gulp.task('minicss',function(){
    gulp.src('./src/*.scss')
    .pipe(compass({
      //设置生成sourcemap，在调试器中显示样式在scss文件中的位置，便于调试
      sourcemap: 'true',
      //输出格式设置为compressed就不需要压缩css了（nested, expanded, compact, or compressed.）
      style: 'compact',
      //文件目录
      css: 'dist',
      sass: 'src',
    }))
    .pipe(rename({suffix:'.min'}))
    .pipe(minicss())
    .pipe(gulp.dest('./dist'));
})

gulp.task('minijs',function(){
    gulp.src('./src/*.js')
    .pipe(rename({suffix:".min"}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
})

gulp.task('default',['jshint'],function(){
    gulp.start('minicss','minijs');
})