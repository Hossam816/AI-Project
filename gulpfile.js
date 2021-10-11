var gulp = require("gulp"),
    concat = require("gulp-concat"),
    prefix = require("gulp-autoprefixer"),
    sass = require('gulp-sass') (require('sass')),
    livereload = require("gulp-livereload");

gulp.task('css', function(){
        return gulp.src("css/sass/*.scss")
                .pipe(sass())
                .pipe(prefix('last 2 versions'))
                .pipe(concat("main.css"))
                .pipe(gulp.dest('dist/css'))
                .pipe(livereload())
            })
    
    
    
    
    gulp.task("watch", function(){
        livereload.listen()
    
        gulp.watch("css/sass/*.scss",gulp.series('css'))
    })