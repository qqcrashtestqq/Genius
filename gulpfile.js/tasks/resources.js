const newer = require('gulp-newer')

const resources = () => {
  return $.gulp
    .src($.path.resources.src)
    .pipe(newer($.path.resources.dest))
    .pipe($.gulp.dest($.path.resources.dest))
}

module.exports = resources
