(function() { 
    'use strict';
    
    function createHtmlPages(count) {
        var htmlPages = '<ul style="list-style: none">';
        for (var i = 0; i < count; i++) {
            htmlPages += '<li style="float: left">' + (i+1) + '</li>';
        }
        htmlPages += '</ul>';
        
        return htmlPages;
    };
    
    ko.bindingHandlers.pagingForeach = {
        
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {  
            var pageSize = 6,
                dishes = ko.unwrap(valueAccessor()),
                dishesCount = dishes.length,
                pageCount;
            
            if (dishesCount / pageSize <= 1) {
                pageCount = 1;
            } else {
                pageCount = Math.floor(dishesCount / pageSize) + 1;
            }
            
            ko.bindingHandlers.foreach.init(element, valueAccessor, allBindings, viewModel, bindingContext);
            $(element).after(createHtmlPages(pageCount));
            return { controlsDescendantBindings: true };
        },
        
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var currentPage = 1,
                pageSize = 6,
                dishes = ko.unwrap(valueAccessor()),
                visibleDishes = [];
                
            var i = 0;
            while (i < pageSize) {
                visibleDishes.push(dishes[i]);
                i++;
            }
            
            
            
            var newValue = function() {
                return {
                    data: visibleDishes
                }
            };
            
            
            ko.bindingHandlers.foreach.update(element, newValue, allBindings, viewModel, bindingContext);
            return { controlsDescendantBindings: true };
        }
    };
})();