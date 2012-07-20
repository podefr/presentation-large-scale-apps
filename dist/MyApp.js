/*! MyApp 2012-07-20
https://github.com/podefr/presentation-large-scale-apps* Copyright (c) 2012 Olivier Scherrer MIT Licensed */

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