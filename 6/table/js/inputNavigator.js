(function( $ ) {
    
    $.fn.inputNavigator = function(options) {
        table = this.first();
        
        var col = table.find('tr').first().find('td').length,
            input = table.find('input'),
            inputCount = input.length,
            current = 0,
            trCount = table.find('tr').length;
                    
        
        function keyDown(e) {
            key = e.keyCode;
            
            switch(key) {
            case 37: //left
                if (current - 1 >= 0) {
                    current -= 1;
                    input[current].focus();
                } else if (current === 0) {
                    current = inputCount -1;
                    input[current].focus();
                }
                break;
            case 38: //up
                if (current - col >= 0) {
                    current -= col;
                    input[current].focus();
                } else if (current - col <= 0 && current !== 0) {
                    current = Math.abs(inputCount - col + current - 1);
                    input[current].focus();
                } else {
                    current = inputCount - 1;
                    input[current].focus();
                }
                break;
            case 39: //right
                if (current + 1 < inputCount) {
                    current += 1;
                    input[current].focus();
                } else if (current === inputCount - 1) {
                    current = 0;
                    input[current].focus();
                }
                break;
            case 40: //down
                if (current + col < inputCount) {
                    current += col;
                    input[current].focus();
                } else if (current + col >= inputCount && current !== inputCount - 1) {
                    current = Math.abs(inputCount - current - col) + 1;
                    input[current].focus();
                } else {
                    current = 0;
                    input[current].focus();
                }
                    
                break;
            default:
                break;
            }
        };
        
        table.find('td').focusin(function() {
            $(this).find('input').addClass('active');
        });
        table.find('td').focusout(function() {
            $(this).find('input').removeClass('active');
        });
        table.find('td').click(function() {
            var currentParent = $(this).parent().index(),
                currentElement = $(this).index() + 1;
            
            current = trCount*currentParent + currentElement - 1;
            
        });
        table.keydown(keyDown);
        
        return this;
    };
 
}( jQuery ));