(function(global, undefined) {
    'use strict';
    
    $(function(){   
        $( '#b1' ).interfaceBlocker({ text: 'You press button 1', delay: 500 });
        $( '#b2' ).interfaceBlocker({ text: 'You press button 2', delay: 1000 });
        $( '#b3' ).interfaceBlocker({ text: 'You press button 3', delay: 2000 });
    });
})(this);