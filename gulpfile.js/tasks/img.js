const imagemin = require('gulp-imagemin')
const changed = require('gulp-changed')

const img = () => {
  return $.gulp
    .src($.path.img.src)
    .pipe(changed($.path.img.dest))
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({ quality: $.app.img.quality, progressive: $.app.img.progressive }),
          imagemin.optipng({ optimizationLevel: $.app.img.optimizationLevel })
        ],
        { verbose: true }
      )
    )
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.browserSync.stream())
}

module.exports = img
