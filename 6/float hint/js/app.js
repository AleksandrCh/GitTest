(function(global, undefined) {
    'use strict';
    
    $(function(){   
        $( 'a' ).floatHint({ text: 'This is link' });
    });
    $(function(){   
        $( 'p' ).floatHint({
            delay: 300,
            align: 'right'
        });
    });
    $(function(){   
        $( 'span' ).floatHint({ 
            text: 'THIS IS SPAAAAAN!!!',
            color: 'green'
        });
    });
    $(function(){   
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