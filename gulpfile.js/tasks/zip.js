const gulpzip = require('gulp-zip')

const zip = () => {
  return $.gulp.src($.path.zip.src).pipe(gulpzip($.app.zipName)).pipe($.gulp.dest($.path.zip.dest))
}

module.exports = zip
