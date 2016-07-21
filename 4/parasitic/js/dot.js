function Dot(name, x, y) {
    Shape.call(this, name);

    this.x = x;
    this.y = y;

    this.draw = (function(base) {
        return function() {
            return base();
        };
    })(this.draw.bind(this));
};
