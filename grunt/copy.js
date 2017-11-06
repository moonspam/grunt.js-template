module.exports = {
  dist: {
    expand: true,
    src: ['**/*', '!**/_less/**'],
    cwd: "src",
    dest: "dist"
  }
};