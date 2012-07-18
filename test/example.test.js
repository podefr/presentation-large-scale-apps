var assert = require("assert");

requirejs(["Example"], function (Example) {
	
	describe("test Example", function () {
		
		it("should be a function", function (done) {
			assert.equal(typeof Example, "function");
			done();
		});
		
		it("should return Example ", function (done) {
			assert.equal("Example defined", Example());
			done();
		});

	});
	
});

