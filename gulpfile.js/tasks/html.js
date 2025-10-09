const fileInclude = require('gulp-file-include')
const typograph = require('gulp-typograf')
const html = () => {
  return $.gulp
    .src($.path.html.src)
    .pipe(fileInclude({ prefix: '@' }))
    .pipe(
      typograph({
        locale: ['ru', 'en-US'],
        htmlEntity: { type: 'digit' },
        safeTags: [
          ['<\\?php', '\\?>'],
          ['<no-typography>', '</no-typography>']
        ]
      })
    )
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream())
}

module.exports = html
