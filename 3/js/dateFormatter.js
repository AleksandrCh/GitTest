'use strict';

var DateFormatter = function() {

  var dayNamesShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Nowember", "December"]; 

  var zeroInsert = function(number, format) {
    var result = "";
    var diff = format.length - number.toString().length;
    if (diff > 0 ) {
      while (diff != 0) {
       result += "0";
       diff--;
      }
    }

    return result + number;
  }

  var parse = function(dateTimeString, dateTimeInputFormat) {
    var date = new Date();
    var day = "";
    var month = "";
    var year = "";

    var i = 0;
    while(i < dateTimeInputFormat.length) {
      if (dateTimeInputFormat[i] === "d"){
        while(i <= dateTimeInputFormat.length && dateTimeInputFormat[i] === "d") {
          day += dateTimeString[i];
          i++;
        }
        i--;
      }
      if (dateTimeInputFormat[i] === "M"){
        while(i <= dateTimeInputFormat.length && dateTimeInputFormat[i] === "M") {
          month += dateTimeString[i];
          i++;
        }
        i--;
      }
      if (dateTimeInputFormat[i] === "y"){
        while(i <= dateTimeInputFormat.length && dateTimeInputFormat[i] === "y") {
          year += dateTimeString[i];
          i++;
        }
        i--;
      }
      i++
    }

    console.log(day);
    console.log(month);
    console.log(year);

    date.setDate(parseInt(day)-1);
    date.setMonth(parseInt(month)-1);
    date.setFullYear(parseInt(year));

    return date;
  };

  var format = function(date, format){
    var result = format;
    var day = date.getDate(),
        dayOfWeek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear();

    var specifiers = format.split(/\W|\d+/);
    for (var i = 0; i < specifiers.length; i++) {
      var specifier = specifiers[i];
      switch(specifier) {
        case "d":
          day++;
          result = result.replace(specifier, day);
          break;
        case "dd":
          day++;
          day = day < 10 ? "0" + day.toString() : day;
          result = result.replace(specifier, day); 
          break;
        case "ddd": 
          result = result.replace(specifier, dayNamesShort[dayOfWeek]);
        break;
        case "dddd":
          result = result.replace(specifier, dayNames[dayOfWeek]);
          break;
        case "M": 
          month++;
          result = result.replace(specifier, month);
          break;
        case "MM":
          month++;
          month = month < 10 ? "0" + month.toString() : month;
          result = result.replace(specifier, month);
          break;
        case "MMM":
          month = monthNamesShort[month];
          result = result.replace(specifier, month);
          break;
        case "MMMM": 
          month = monthNames[month];
          result = result.replace(specifier, month);
          break;
        case "y": 
          year = [(year / 10 >> 0) % 10, year % 10]; 
          result = result.replace(specifier, year[0]*10 + year[1]);
          break;
        case "yy": 
          result = result.replace(specifier, zeroInsert(year, "yy"));
        case "yyy": 
          result = result.replace(specifier, zeroInsert(year, "yyy"));
          break;
        case "yyyy": 
          result = result.replace(specifier, zeroInsert(year, "yyyy"));
          break;
        case "yyyyy":
          result = result.replace(specifier, zeroInsert(year, "yyyyy"));
          break;
      }
    }

    console.log(result);
    return result;
  };

  return {
    parse: parse,
    format: format
  };
};

(function test(){
  var o = new DateFormatter();
  var d = o.parse("19072016", "ddMMyyyy");
  var f = o.format(d, "ddd-MM-yyy");      
})();