module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['**/*.html'],
      dest: 'dist/'
    }],
    options: {
      replacements: [
        {
          pattern: /(?:[ |\t]*<!--\(\s?compress-css-start\s?\)-->)\n?([\s\S]+?)(?:[ |\t]*<!--\(\s?compress-css-end\s?\)-->)/g,
          replacement: '  <link rel="stylesheet" href="css/style.min.css">'
        },
        {
          pattern: /js\/ui.js/g,
          replacement: 'js/ui.min.js'
        }
      ]
    }
  }
};