module.exports = {
  less: {
    files: ['src/_less/*.less'],
    tasks: ['less'],
    options: {
      nospawn: true
    }
  },
  jshint: {
    files: ['src/js/**/*.js'],
    tasks: ['jshint']
  },
  livereload: {
    files: ['src/**/*'],
    options: {
      livereload: true
    },
  }
};