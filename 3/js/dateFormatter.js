(function(global, undefined) {
    'use strict';
    global.DateFormatter = function() {
    
        var dayNamesShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Nowember", "December"], 
            specifiers = {
            "dddd" : {
                parse: function(startIndex, length, dateTimeString, date){},
                format: function(date){
                    var dayOfWeek = date.getDay();
                    return dayNames[dayOfWeek];
                }
            },
            "ddd": {
                parse: function(startIndex, length, dateTimeString, date){},
                format: function(date){
                    var dayOfWeek = date.getDay();
                    return dayNamesShort[dayOfWeek];
                }
            },
            "dd": {
                parse: function(startIndex, length, dateTimeString, date) {
                  var subDate = dateTimeString.substr(startIndex, startIndex + length);   
                  date.setDate(parseInt(subDate) - 1);
                },
                format: function(date){
                    var day = date.getDate() + 1;
                    day = day < 10 ? "0" + day.toString() : day;
                    return day.toString(); 
                }
            },
            "d": {
                parse: function(startIndex, length, dateTimeString, date) {
                    var subDate = dateTimeString.substr(startIndex, startIndex + length);  
                    date.setDate(parseInt(subDate) - 1);
                },
                format: function(date) {
                    var day = date.getDate() + 1;
                    return day.toString();
                }
            },
            "MMMM": {
                parse: function(startIndex, length, dateTimeString, date){},
                format: function(date) {
                    return monthNames[date.getMonth()];
                }
            },
            "MMM": {
                parse: function(startIndex, length, dateTimeString, date){},
                format: function(date) {
                    return monthNamesShort[date.getMonth()];
                }
            },
            "MM": {
                parse: function(startIndex, length, dateTimeString, date){
                    var subDate = dateTimeString.substr(startIndex, startIndex + length);   
                    date.setMonth(parseInt(subDate) - 1);
                },
                format: function(date) {
                    var month = date.getMonth() + 1;
                    month = month < 10 ? "0" + month.toString() : month;
                    return month;
                }
            },
            "M": {
                parse: function(startIndex, length, dateTimeString, date) {
                    var subDate = dateTimeString.substr(startIndex, startIndex + length);  
                    date.setMonth(parseInt(subDate) - 1);
                },
                format: function(date){
                    return date.getMonth() + 1;
                }
            },
            "yyyyy": {
                parse: function(startIndex, length, dateTimeString, date) {
                    var subDate = dateTimeString.substr(startIndex, startIndex + length);  
                    date.setFullYear(parseInt(subDate));
                },
                format: function(date) {
                    var year = date.getFullYear();
                    return zeroInsert(year, "yyyyy");
                }
            },
            "yyyy": {
                parse: function(startIndex, length, dateTimeString, date) {
                    var subDate = dateTimeString.substr(startIndex, startIndex + length);  
                    date.setFullYear(parseInt(subDate));
                },
                format: function(date) {
                    var year = date.getFullYear();
                    return zeroInsert(year, "yyyy");
                }
            },
            "yyy": {
                parse: function(startIndex, length, dateTimeString, date) {
                    var subDate = dateTimeString.substr(startIndex, startIndex + length);  
                    date.setFullYear(parseInt(subDate));
                },
                format: function(date) {
                    var year = date.getFullYear();
                    return zeroInsert(year, "yyy");
                }   
            },
            "yy": {
                parse: function(startIndex, length, dateTimeString, date) {
                    var subDate = dateTimeString.substr(startIndex, startIndex + length);  
                    date.setFullYear(parseInt(subDate));
                },
                format: function(date) {
                    var year = date.getFullYear();
                    year = [(year / 10 >> 0) % 10, year % 10];
                    var strYear = "";
                    year[0] == 0 ? strYear += "0" : strYear += year[0].toString();
                    year[1] == 0 ? strYear += "0" : strYear += year[1].toString();
                    
                    return strYear;
                }
            },
            "y": {
                parse: function(startIndex, length, dateTimeString, date) {
                    var subDate = dateTimeString.substr(startIndex, startIndex + length);  
                    date.setFullYear(parseInt(subDate));
                },  
                format: function(date) {
                    var year = date.getFullYear();
                    year = [(year / 10 >> 0) % 10, year % 10]; 
                    return (year[0]*10 + year[1]);
                }
            }
        };
    
        var zeroInsert = function(number, format) {
            var s = number+"";
            while (s.length < format.length) s = "0" + s;
            return s;
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
    
        var parse = function(dateTimeString, dateTimeInputFormat) {
            var date = new Date(),
                startIndex;
    
            if (dateTimeString.length != dateTimeInputFormat.length) 
                throw new Error("Different input length.");
    
            for (var key in specifiers) {
                if (!specifiers.hasOwnProperty(key )) continue;
                if ((startIndex = dateTimeInputFormat.indexOf(key)) != -1) {
                    specifiers[key].parse(startIndex, key.length, dateTimeString, date);
                    dateTimeInputFormat = dateTimeInputFormat.replace(key, "");
                    dateTimeString = dateTimeString.replace(dateTimeString.substr(startIndex, key.length), "");
                }
            }
    
            return date;
        };
    
        var initFormatBool = function(arr, length) {
            for (var j = 0; j < length; j++) {
                arr[j] = true;
            }
        
            return arr;
        };
    
        var replaceSpecifier = function(format, startIndex, length, value) {
            var formatPart1 = "",
                formatPart2 = "",
                result = "";
        
            if (startIndex == 0) {
                formatPart1 = format.substring(startIndex+length, format.length);
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
        
        var format = function(date, format) {
            var result = "",
                startIndex,
                start=0,
                value = 0,
                components = [],
                component,
                formatBool = [];
        
            formatBool = initFormatBool(formatBool, format.length);
        
            for (var specifier in specifiers) {
                if (!specifiers.hasOwnProperty(specifier)) continue;
                
                while ((startIndex = format.indexOf(specifier, start)) != -1) {
                    if (components.indexOf(startIndex) == -1 && formatBool[startIndex] == true) {
                        var tmpObj= {
                            "startIndex": startIndex,
                            "specifier": specifier
                        }; 
                        components.push(tmpObj);

                        formatBool = changeFormatBool(formatBool, startIndex, startIndex + specifier.length);
                    }
                    start += specifier.length;
                }
                start = 0;
            }
        
            components.sort(function(a, b) {
                return a["startIndex"] - b["startIndex"];
            });
        
            for (var i = components.length-1; i >= 0; i--) {
                component = components[i];
                value = specifiers[component.specifier].format(date);
                format = replaceSpecifier(format, component.startIndex, component.specifier.length, value);
            }
        
            return format;
        };
    
        return {
            parse: parse,
            format: format
        };
    };
})(this);