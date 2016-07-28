function Dot(name, x, y) {
	Dot.superclass.constructor.call(this, name);

	this.x = x;
	this.y = y; 
};

extend(Dot, Shape);

Dot.prototype.draw = function() {
    return Dot.superclass.draw.call(this, this.name);
};
