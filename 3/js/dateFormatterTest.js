(function test(global, undefined){
	'use strict';
    var o = new global.DateFormatter();
    var d = o.parse("31052016", "ddMMyyyy");
    var f = o.format(d, "dddd MMMM dd/MM/yyyy");   

    console.log(f);   
})(this);