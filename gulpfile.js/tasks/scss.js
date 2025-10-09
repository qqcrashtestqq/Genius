// Плагины
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const queries = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

const scss = () => {
  if ($.app.isDev) {
    return $.gulp
      .src($.path.scss.src)
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          outputStyle: 'compressed',
          includePaths: ['node_modules'],
          silenceDeprecations: ['legacy-js-api']
        })
      )
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe($.gulp.dest($.path.scss.dest))
      .pipe($.browserSync.stream())
  }

  return $.gulp
    .src($.path.scss.src)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(queries())
    .pipe(csso())
    .pipe($.gulp.dest($.path.scss.dest))
}

module.exports = scss
