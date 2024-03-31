import gulp from 'gulp';
import pug from 'gulp-pug';
import * as nodesass from 'sass';
import gulpsass from 'gulp-sass';
import imagemin from 'gulp-imagemin'
const sass = gulpsass(nodesass)


gulp.task('views', () => {
  return gulp.src('./src/views/*.pug')
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('./public'))
})

gulp.task('styles', () => {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css'))
  //{outputStyle: 'compressed'}
})

gulp.task('slick', () => {
  return gulp.src('./src/scss/slick/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css/slick'))
  //{outputStyle: 'compressed'}
})

gulp.task('imageop', () => {
  return gulp.src('./src/images/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./public/images'))
})

gulp.task('default', () => {
  gulp.watch('./src/views/**/*.pug', gulp.series('views'))
  gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
  gulp.watch('./src/scss/slick/*.scss', gulp.series('slick'))
  gulp.watch('./src/images/**/*', gulp.series('imageop'))
})