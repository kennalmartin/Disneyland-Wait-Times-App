const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('concat', function(){
  gulp.src(['app.js','./hours/**/*.js', 'mainCtrl.js', './services/**/*.js','./directives/**/*.js'])
  .pipe(concat('all.js'))
  .pipe(babel({
    presets:['es2015']
  }))
  .pipe(gulp.dest('./dist'));
});



gulp.task('default', ['concat']);

gulp.watch(['app.js','./hours/**/*.js', 'mainCtrl.js', './services/**/*.js','./directives/**/*.js'], ['concat']);
