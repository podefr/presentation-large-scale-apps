module.exports = function (grunt) {
	
		grunt.registerTask("jstd", "task for running tests with JsTestDriver", function () {
		
		var done = this.async();

		grunt.utils.spawn({
			cmd: "java",
			args: [
			       "-jar", "tools/JsTestDriver/JsTestDriver-1.3.4.b.jar",
			       "--tests", "all"
			       ]
		}, function (err, res) {
				grunt.log.writeln(res);
				done(!+(/Fails: ([0-9]+);/.exec(res)[1]));
		});

	});
	
};