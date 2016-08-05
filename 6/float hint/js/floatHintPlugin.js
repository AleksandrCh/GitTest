(function( $ ) {
 
    var defaults = {
        text: 'Empty hint',
        color: '#fff',
        align: 'left',
        delay: '1000',
        hintBodyClass: 'float-hint',
        hintBodyTextClass: 'float-hint-text'
    };
    
    $.fn.floatHint = function(options) {
        var config = $.extend({}, defaults, options),
            timerId,
            floatHintHtml = init(config.hintBodyClass, config.hintBodyTextClass),
            floatHintClass = '.' + config.hintBodyClass,
            floatHintTextClass = '.' + config.hintBodyTextClass,
            width,
            height;
        
        $('body').append(floatHintHtml);
        
        width = $(floatHintClass).first().outerWidth(),
        height = $(floatHintClass).first().outerHeight();
            
        function init(hintBodyClass, hintBodyTextClass) {
            var hintBody = '<div class="' + hintBodyClass + '"><div class="' + hintBodyTextClass + '"></div></div>';
            return hintBody;
        };
        
        function mouseHover() {
            var hint = $(floatHintClass).first();
            
            timerId = setTimeout(function() {
                hint.fadeIn(400).css({
                    'display': 'block',
                    'color': config.color
                }).find(floatHintTextClass).text(config.text);
            }, config.delay);
        };
        
        function mouseLeave() {
            $(floatHintClass).first().css('display', 'none').stop(true);
            clearTimeout(timerId);
        };
        
        function mouseMove(e) {
            var x = e.pageX,
                y = e.pageY,
                hint = $(floatHintClass).first();
            
            switch(config.align) {
            case 'left':
                x += 15;
                y += 15;
                break;
            case 'center': 
                x = x - width - 22.5;
                y = y + height / 2 + 15;
                break;
            case 'right':
                x = x - width * 2 - 30;
                y += 15;
                break;
            defaults:
                x += 15;
                y += 15;
            }
        
            hint.css({
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