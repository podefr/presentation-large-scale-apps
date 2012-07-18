/*
 * Helper functions
 */
var fs = require("fs");

var getDir = function getDir(dir) {
	return fs.readdirSync(dir).map(function (val) {
		return dir += "/" + val;
	});
};

/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      name: "MyApp",
      banner: "/*! <%= meta.name %> " +
        "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" +
        "https://github.com/podefr/presentation-large-scale-apps" +
        "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> Olivier Scherrer" +
        " MIT Licensed */"
    },
    lint: {
      files: ["src/*.js"]
    },
    concat: {
      dist: {
        src: ["<banner:meta.banner>"].concat(getDir("src")),
        dest: "dist/<%= meta.name %>.js"
      }
    },
    min: {
      dist: {
        src: ["<banner:meta.banner>", "<config:concat.dist.dest>"],
        dest: "dist/<%= meta.name %>.min.js"
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: false,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true
      },
      globals: {
        require: true,
        define: true
      }
    },
    jstd: {},
    uglify: {}
  });
  
  // Default task.
  grunt.registerTask("default", "lint test jsDoc concat min");
  
  grunt.registerTask("test", "jstd");
  
  grunt.loadTasks("tasks");

};
