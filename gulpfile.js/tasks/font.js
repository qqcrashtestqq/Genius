const newer = require('gulp-newer')
const fonter = require('gulp-fonter')
const ttf2woff2 = require('gulp-ttf2woff2')

const font = () => {
  return $.gulp
    .src($.path.font.src)
    .pipe(newer($.path.font.dest))
    .pipe(fonter({ formats: $.app.fonts.formats }))
    .pipe($.gulp.dest($.path.font.dest))
    .pipe(ttf2woff2())
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.browserSync.stream())
}

module.exports = font
