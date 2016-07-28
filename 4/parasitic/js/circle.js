function Circle(name, x, y, r) {
    Dot.call(this, name, x, y);

    this.r = r;

    this.draw = (function(base) {
        return function() {
            return base();
        };
    })(this.draw.bind(this));
};