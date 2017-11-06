module.exports = {
  less: {
    files: ['src/_less/*.less'],
    tasks: ['less'],
    options: {
      nospawn: true
    }
  },
  livereload: {
    files: ['src/**/*'],
    options: {
      livereload: true
    },
  }
};