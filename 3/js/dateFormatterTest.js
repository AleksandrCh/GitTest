(function test(global, undefined){
	'use strict';
    var o = new global.DateFormatter();
    var d = o.parse("31052006", "ddMMyyyy");
    var f = o.format(d, "dddd MMMM dd/MM/yyyy d dd ddd dddd M MM MMM MMMM y yy yyy yyyy yyyyy yyyy yyy yy y dddd ddd dd d MMMM MM MMM M");   

    console.log(f);   
})(this);