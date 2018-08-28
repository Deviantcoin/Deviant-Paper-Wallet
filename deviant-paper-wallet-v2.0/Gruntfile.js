module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    combine: {
      i18n: {
        input: "./index.html",
        output: "./index.html"
      }
    }
  })

  grunt.file.defaultEncoding = 'utf-8'
  grunt.loadNpmTasks("grunt-combine")
  grunt.registerTask("default", ["combine:src", "combine:i18n"])
}
