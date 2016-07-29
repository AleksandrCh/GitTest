(function( $ ) {
 
    var defaults = {
        text: 'Empty hint',
        color: '#fff',
        align: 'center',
        delay: '1000',
        hintBodyClass: 'float-hint',
        hintBodyTextClass: 'float-hint-text'
    };
    
    function init(hintBodyClass, hintBodyTextClass) {
        var hintBody = '<div class="' + hintBodyClass + '"><div class="' + hintBodyTextClass + '"></div></div>';
        return hintBody;
    };
    
    $.fn.floatHint = function(options) {
        var config = $.extend({}, defaults, options),
            timerId,
            floatHintHtml = init(config.hintBodyClass, config.hintBodyTextClass);
        
        $('body').append(floatHintHtml);
        
        function mouseHover() {
            var hint = $('.float-hint');
            
            timerId = setTimeout(function() {
                hint.fadeIn(400).css({
                    'display': 'block',
                    'color': config.color,
                    'text-align': config.align
                }).find('.float-hint-text').text(config.text);
            }, config.delay);
        };
        
        function mouseLeave() {
            $('.float-hint').css('display', 'none').stop(true);
            clearTimeout(timerId);
        };
        
        function mouseMove(e) {
            var x = e.pageX + 15,
                y = e.pageY + 15;
                
            $('.float-hint').css({
                'left': x + 'px',
                'top': y + 'px'
            });
        };
        
        this.each(function() {
            $(this).hover(mouseHover, mouseLeave).mousemove(mouseMove);
        });
        
        return this;
    };
 
}( jQuery ));