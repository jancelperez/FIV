var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify'); 
var source = require('vinyl-source-stream');
var wathcify = require('watchify');

gulp.task('estilos',function(){
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'));
});

gulp.task('assets',function(){
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'));
});

function compilar(watch){
    var bundle = browserify('./src/index.js');
    
    function rebundle(){
     bundle
        .transform(babel)
        .bundle()
        .on('error', function(err){
            console.log(err); 
            this.emit('end');   
        })
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'));
    }
    
    if (watch){
        bundle.on('update' , function(){
            console.log('--->se ha realizado un cambio en el archivo');
            rebundle();
        });
    }
    rebundle();
}

gulp.task('build' , function(){
    return compilar();
});

gulp.task('watch' , function(){
    return compilar(true);
});


gulp.task('default',['estilos','assets','build']);