const isProd = process.argv.includes('--production')
const isDev = !isProd

module.exports = {
  isProd: isProd,
  isDev: isDev,
  webpack: { mode: isProd ? 'production' : 'development' },

  img: {
    quality: 70,
    progressive: true,
    optimizationLevel: 5
  },

  fonts: {
    formats: ['ttf', 'woff']
  },

  zipName: 'gulp.zip'
}
