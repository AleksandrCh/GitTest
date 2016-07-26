function Shape(name) {
    var self = {
        name: name,

        draw: function() {
            return name;
        },
    };

    self.constructor = Shape;

    return self;
};