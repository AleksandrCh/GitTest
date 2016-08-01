var Cart = function() {
    var self = this;
    self.lines = ko.observableArray(); // Put one line in by default
    self.grandTotal = ko.pureComputed(function() {
        var total = 0;
        $.each(self.lines(), function() { total += this.subtotal() })
        return total;
    });
}