function Shape(name) {
	this.name = name;
};

Shape.prototype = {
	constructor: Shape,

	draw: function() {
		return this.name;
	}
};