'use strict';

function add(a, b) {
	return a + b;
};

var f = functionModule.lazyEval(add, 5, 6);

console.log(f());