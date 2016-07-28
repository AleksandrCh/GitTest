function Shape(name) {
    this.name = name;

    this.draw = function() {
        return this.name;
    };
};