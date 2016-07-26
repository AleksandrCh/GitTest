function Circle(name, x, y, r) {
    var base = new Dot(name, x, y);
    var self = object(base);

    self.r = r;

    self.draw = function() {
        return base.draw.call(this, name);
	};

    self.constructor = Circle;

    return self;
};