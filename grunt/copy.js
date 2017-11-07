module.exports = {
  dist: {
    expand: true,
    src: ['**/*', '!**/_less/**', '!**/js/**'],
    cwd: "src",
    dest: "dist"
  }
};