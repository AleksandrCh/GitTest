(function(global, undefined) {
    'use strict';
    
    $(function(){   
        $( 'a' ).floatHint({ text: 'This is link' });
        $( 'p' ).floatHint({
            delay: 300,
            align: 'right'
        });
        $( 'span' ).floatHint({ 
            text: 'THIS IS SPAAAAAN!!!',
            color: 'green'
        });
        $( 'button' ).floatHint({ 
            text: 'You can click on button',
            color: 'green',
            align: 'center',
            delay: 2000,
            hintBodyClass: 'float-hint-custom',
            hintBodyTextClass: 'float-hint-text-custom'
        });
    });
})(this);