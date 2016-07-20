var Figure = function(color) {
	this.color = color;

	this.draw = function() {
		console.log("Draw");
	}
}

var Dot = function(x, y, color) {
	Figure.call(this, color);
	this.x = x;
	this.y = y;
}

var Triangle = function(x, y, z, color) {
	Figure.call(this, color);
	this.x = x;
	this.y = y;
	this.z = z;	
}

var Square = function(x, y, color) {
	Figure.call(this, color);
	this.x = x;
	this.y = y;
}

var Circle = function(x, y, r, color) {
	Figure.call(this, color);
	this.x = x;
	this.y = y;
	this.r = r;
}

var Ellipse = function(x, y, r, color) {
	Circle.call(this, x, y, r, color);
}

Dot.prototype      = Object.create(Figure.prototype);
Triangle.prototype = Object.create(Figure.prototype);
Square.prototype   = Object.create(Figure.prototype);
Circle.prototype   = Object.create(Figure.prototype);
Ellipse.prototype  = Object.create(Circle.prototype);

var dot = new Dot(1, 5, "Black");
var ellipse = new Ellipse(2, 3, 5, "Red");

if (dot instanceof Figure)  console.log("true");
if (ellipse instanceof Figure)  console.log("true");