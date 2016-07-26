function Dot(name, x, y) {
    var base = new Shape(name);
    var self = object(base);

    self.x = x;
    self.y = y;

    self.draw = function() {
        return base.draw.call(this, name);
	};

    self.constructor = Dot;

    return self;
};
