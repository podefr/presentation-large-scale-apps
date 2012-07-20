requirejs(["Example"], function (Example) {
	
	describe("test Example", function () {
		
		it("should be a constructor function", function () {
			expect(typeof Example).toEqual("function");
		});
		
		it("should have a getName function", function () {
			var example = new Example;
			expect(typeof example.getName).toEqual("function");
		});
		
		it("should return Example", function (done) {
			var example = new Example;
			expect(example.getName()).toEqual("Example");
		});

	});
	
});

