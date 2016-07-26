'use strict';

var t = 5;

var f = function(a, b, c) {
	return a + b + c;
}

function add(a, b) {
	return a+b;
}



var func = lazyEval(add, 4, 5);
console.log(func());