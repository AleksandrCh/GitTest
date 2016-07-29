(function( $ ) {
    
    var defaults = {
        text: '',
        delay: '500',
        interfaceBlockerBox: 'interface-blocker-box',
        interfaceBlockerText: 'interface-blocker-text'
    };
    
    /*var init = function(config) {
        var html ='<div class="interface-blocker-overlay"><div class="' + config.interfaceBlockerBox + '"><div class="' + config.interfaceBlockerText + '">' + config.text + '</div><div class="interface-blocker-button">OK</div></div></div>';
        $('body').append(config);
    }*/
    
    $.fn.interfaceBlocker = function(options) {
        var config = $.extend({}, defaults, options)
        
        this.click(function(e) {   
            $('.interface-blocker-overlay').css('display', 'block');
            $('.interface-blocker-text').text(config.text);
            e.preventDefault();
            var flag;
            $('.interface-blocker-overlay').find('.interface-blocker-button').click(function(e) {
                $('.interface-blocker-overlay').css('display', 'none');
            });
            
        });
        
        
        
        return this;
    };
 
}( jQuery ));