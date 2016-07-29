(function( $ ) {
    $.fn.inputNavigator = function(options) {
        element = this.first();
        
        var col = element.find('tr').length,
            input = element.find('input'),
            currentX = 0,
            currentY = 0;
        
        function keyDown(e) {
            key = e.keyCode;
            
            
            switch(key) {
            case 37: //left
                break;
            case 38: //up
                input[currentX - 1 + currentY].focus();
                break;
            case 39: //right
                input[8].focus();
                break;
            case 40: //down
                input[currentX + 1 + currentY].focus();
                break;
            default:
                break;
            }
            console.log(key);
            console.log();
        };
        
        element.find('td').focusin(function() {
            $(this).find('input').addClass('active');
        });
        element.find('td').focusout(function() {
            $(this).find('input').removeClass('active');
        });
        
        element.keydown(keyDown);
        
        return this;
    };
 
}( jQuery ));