define("Example", 

/**
 * @class
 * An example class
 * @returns {Function}
 */
function Example() {
	
	return function ExampleConstructor() {
		
		this.getName = function getName() {
			return "Example";
		};
		
	};
	
});