(function( $ ) {
    
    var defaults = {
        text: '',
        delay: '500',
        interfaceBlockerBox: 'interface-blocker-box',
        interfaceBlockerText: 'interface-blocker-text'
    };
    
    var init = function(config) {
        if (!($('*').is('.interface-blocker-overlay'))) {
            var html ='<div class="interface-blocker-overlay"><div class="' + config.interfaceBlockerBox + '"><div class="' + config.interfaceBlockerText + '">' + config.text + '</div><div class="interface-blocker-button-ok">OK</div><div class="interface-blocker-button-cancel">Отмена</div></div></div>';
            
            $('body').append(html);
        
            $('.interface-blocker-overlay').css({
                'display': 'none',
                'width': '100%',
                'height': '100%',
                'position': 'fixed',
                'top': '0',
                'bottom': '0',
                'left': '0',
                'right': '0',
                'margin': 'auto',
                'z-index': '50',
                'background-color': 'rgba(0, 0, 0, 0.42)',
                'transition': 'all 1s ease',
                '-webkit-transition': 'all 2s 1s ease'
            });
        }
    }
        
    $.fn.interfaceBlocker = function(options) {
        var config = $.extend({}, defaults, options)
        var confirm = false;
        
        init(config);
        
        this.click(function(e) {   
            $('.interface-blocker-overlay').css('display', 'block');
            $('.interface-blocker-text').text(config.text);
            e.preventDefault();
            var flag;
            $('.interface-blocker-overlay').find('.interface-blocker-button-ok').click(function(e) {
                $('.interface-blocker-overlay').css('display', 'none');
            });
            $('.interface-blocker-overlay').find('.interface-blocker-button-cancel').click(function(e) {
                $('.interface-blocker-overlay').css('display', 'none');
            });
            
        });        
        
        return this;
    };
 
}( jQuery ));