'use strict';

var DateFormatter = function() {

  var _dayNamesShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var _dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var _monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var _monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Nowember", "December"]; 

  var zeroInsrter = function(number, format) {
    var result = "";


    return result;
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
      i++;
    }

    _date.setDate(parseInt(day)-1);
    _date.setMonth(parseInt(month)-1);
    _date.setFullYear(parseInt(year));

    return _date;
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
          result = result.replace(specifier, _dayNamesShort[dayOfWeek]);
        break;
        case "dddd":
          result = result.replace(specifier, _dayNames[dayOfWeek]);
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
          month = _monthNamesShort[month];
          result = result.replace(specifier, month);
          break;
        case "MMMM": 
          month = _monthNames[month];
          result = result.replace(specifier, month);
          break;
        case "y": 
          year = [(year / 10 >> 0) % 10, year % 10]; 
          result = result.replace(specifier, year[0]*10 + year[1]);
          break;
        case "yy": 
          year = [(year / 10 >> 0) % 10, year % 10];
          var strYear = "";
          year[0] == 0 ? strYear += "0" : strYear += year[0].toString();
          year[1] == 0 ? strYear += "0" : strYear += year[1].toString();
          result = result.replace(specifier, strYear);
          break;
        case "yyy": 
          if (year.toString().length >= 3) {
            result = result.replace(specifier, year);
          } else {
            var strYear = [];
            strYear[0] = (year / 100 >> 0) % 10;
            strYear[1] = (year / 10 >> 0) % 10;
            strYear[2] = year % 10; 
            result = result.replace(specifier, strYear.join(""));
          }
          break;
        case "yyyy": 
          if (year.toString().length >= 4) {
            result = result.replace(specifier, year);
          } else {
            var strYear = [];
            strYear[0] = (year / 1000 >> 0) % 10;
            strYear[1] = (year / 100 >> 0) % 10;
            strYear[2] = (year / 10 >> 0) % 10;
            strYear[3] = year % 10; 
            result = result.replace(specifier, strYear.join(""));
          }
          break;
        case "yyyyy":
          if (year.toString().length >= 5) {
            result = result.replace(specifier, year);
          } else {
            result = zeroInsert(year, "yyyyy");
          }
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
  var f = o.format(d, "dddd-MM-yyyyy");      
})();