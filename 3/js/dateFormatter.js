'use strict';

var DateFormatter = function() {

  var specifiers = {
    "dddd" : {
      parse : function(startIndex, length, dateTimeString, date){},
      format : function(date){
        var dayOfWeek = date.getDay();
        return dayNames[dayOfWeek];
      }
    },
    "ddd" : {
      parse : function(startIndex, length, dateTimeString, date){},
      format : function(date){
        var dayOfWeek = date.getDay();
        return dayNamesShort[dayOfWeek];
      }
    },
    "dd" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);   
        date.setDate(parseInt(subDate) - 1);
      },
      format : function(date){
        var day = date.getDate()+1;
        day = day < 10 ? "0" + day.toString() : day;
        return day.toString(); 
      }
    },
    "d" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);  
        date.setDate(parseInt(subDate) - 1);
      },
      format : function(date){
        var day = date.getDate()+1;
        return day.toString();
      }
    },
    "MMMM" : {
      parse : function(startIndex, length, dateTimeString, date){},
      format : function(date){
        return monthNames[date.getMonth()];
      }
    },
    "MMM" : {
      parse : function(startIndex, length, dateTimeString, date){},
      format : function(date){
        return monthNamesShort[date.getMonth()];
      }
    },
    "MM" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);   
        date.setMonth(parseInt(subDate) - 1);
      },
      format : function(date){
        var month = date.getMonth();
        month = month < 10 ? "0" + month.toString() : month;
        return month;
      }
    },
    "M" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);  
        date.setMonth(parseInt(subDate) - 1);
      },
      format : function(date){
        return date.getMonth();
      }
    },
    "yyyyy" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);  
        date.setFullYear(parseInt(subDate));
      },
      format : function(date){
        var year = date.getFullYear();
        return zeroInsert(year, "yyyyy");
      }
    },
    "yyyy" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);  
        date.setFullYear(parseInt(subDate));
      },
      format : function(date){
        var year = date.getFullYear();
        return zeroInsert(year, "yyyy");
      }
    },
    "yyy" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);  
        date.setFullYear(parseInt(subDate));
      },
      format : function(date){
        var year = date.getFullYear();
        return zeroInsert(year, "yyy");
      }
    },
    "yy" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);  
        date.setFullYear(parseInt(subDate));
      },
      format : function(date){
        var year = date.getFullYear();
        year = [(year / 10 >> 0) % 10, year % 10];
        var strYear = "";
        year[0] == 0 ? strYear += "0" : strYear += year[0].toString();
        year[1] == 0 ? strYear += "0" : strYear += year[1].toString();
        
        return strYear;
      }
    },
    "y" : {
      parse : function(startIndex, length, dateTimeString, date){
        var subDate = dateTimeString.substr(startIndex, startIndex + length);  
        date.setFullYear(parseInt(subDate));
      },
      format : function(date){
        var year = date.getFullYear();
        year = [(year / 10 >> 0) % 10, year % 10]; 
        return (year[0]*10 + year[1]);
      }
    }
  };

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

  var cutDate = function(dateString, startIndex, length) {
    return dateString.substr(startIndex, startIndex + length);
  }

  var changeFormatBool = function(arr, start, end) {
    for (var i = start; i < end; i++) {
      arr[i] = false;
    }
    return arr;
  }

  var dayNamesShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Nowember", "December"]; 

  var parse = function(dateTimeString, dateTimeInputFormat) {
    var date = new Date();

    if (dateTimeString.length != dateTimeInputFormat.length) 
      throw new Error("Different input length.");

    var startIndex;
    for (var key in specifiers) {
      if ((startIndex = dateTimeInputFormat.indexOf(key)) != -1) {
        specifiers[key].parse(startIndex, key.length, dateTimeString, date);
        dateTimeInputFormat = dateTimeInputFormat.replace(key, "");
        dateTimeString = dateTimeString.replace(dateTimeString.substr(startIndex, key.length), "");
      }
    }

    return date;
  };

  var initialFormatBool = function(arr, length){
    for (var j = 0; j < length; j++) {
      arr[j] = true;
    }

    return arr;
  };

  var replaceSpecifier = function(format, startIndex, length, value) {
    var formatPart1, formatPart2;
    var result;

    if (startIndex == 0) {
      formatPart1 = format.substring(startIndex+length, format.length - 1);
      result = value.toString().concat(formatPart1);
    } else if (startIndex + length == format.length) {
      formatPart1 = format.substring(0, startIndex);
      result = formatPart1.concat(value);
    } else {
      formatPart1 = format.substring(0, startIndex);
      formatPart2 = format.substring(startIndex+length, format.length);
      result = formatPart1.concat(value.toString(), formatPart2);
    }

    return result;
  }

  var format = function(date, format){
    var result = "";
    var startIndex;
    var value;
    var components = [],
        formatBool = [];

    formatBool = initialFormatBool(formatBool, format.length);

    var start=0;
    for (var key in specifiers) {
      while ((startIndex = format.indexOf(key, start)) != -1) {
        if (components.indexOf(startIndex) == -1 && formatBool[startIndex] == true) {
          formatBool = changeFormatBool(formatBool, startIndex, startIndex + key.length);
          var tmpObj= {};
          tmpObj["start"] = startIndex;
          tmpObj["specifier"] = key; 
          components.push(tmpObj);
        }
        start += key.length;
      }
      start = 0;
    }

    components.sort(function(a, b) {
      return a["start"] - b["start"];
    });

    for (var i = components.length-1; i >= 0; i--) {
      value = specifiers[components[i].specifier].format(date);
      console.log(components[i].start);
      format = replaceSpecifier(format, components[i].start, components[i].specifier.length, value);
    }

    console.log(format);
    return result;
  };

  return {
    parse: parse,
    format: format
  };
};

(function test(){
  var o = new DateFormatter();
  var d = o.parse("31122016", "ddMMyyyy");
  var f = o.format(d, "(MM/dd/yyyy)");      
})();