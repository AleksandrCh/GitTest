
function.method('inherits', function(Parent) {
	this.prototype = new Parent();
	return this;
});

var Figure = function(color) {
	this.color = color;

	this.draw = function() {
		console.log(this.shape);
	}
}

var Dot = function(color) {
	this.shape = "Dot";
}.
	inherits(Figure);

var Triangle = function(color) {

}

var Square = function(color) {

}

var Circle = function(color) {

}

var Ellipse = function(color) {

}

var dot = new Dot();
dot.draw();



