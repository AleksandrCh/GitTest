(function(global, undefined) {
    'use strict';
    
    $(function(){   
        $( 'a' ).floatHint({ text: 'This is link' });
    });
    $(function(){   
        $( 'p' ).floatHint({
            delay: 300
        });
    });
    $(function(){   
        $( 'span' ).floatHint({ 
            text: 'THIS IS SPAAAAAN!!!',
            color: 'green'
        });
    });
})(this);