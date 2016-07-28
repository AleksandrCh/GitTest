(function( $ ) {
 
    $.fn.floatHint = function() {
    
        var html = '<div style="width: 126px" class="float-hint"><div class="pointer"></div><text>Lorem ipsum dolor sit amet.</text></div>';
        
        this.on('mouseenter', function(){
            var position = $(this).position();
            console.log(position.left);
            
            $(this).css('dispay', 'block');
            $(this).append(html);
            
            var hint = $('.float-hint');
              
            hint.css('width', $(this).width);
            
        });
        
        this.on('mouseleave', function(){         
            $('.float-hint').remove();
        });
    
 
        return this;
 
    };
 
}( jQuery ));