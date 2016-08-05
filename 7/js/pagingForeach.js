(function() { 
    'use strict';
    
    function createHtmlPages(count, element) {
        var htmlPages = '<ul class="paging-foreach">';
        for (var i = 0; i < count; i++) {
            htmlPages += '<li class="paging-foreach-item" style="float: left">' + (i+1) + '</li>';
        }
        htmlPages += '</ul>';
        
        $(element).append(htmlPages);
        $('.paging-foreach').css({
            'list-style': 'none',
            'width': '100%',
            'clear': 'both'
        });
        $('.paging-foreach-item').css({
            'cursor': 'pointer',
            'background': '#eaeaea',
            'padding': '5px 10px',
            'margin-left': '10px'
        }).hover(function(e){
            $(this).css({
                'background': '#eaeaea',
                'box-shadow': '1px 2px 3px #000'
            });
        }, function(e) {
            $(this).css({
                'background': 'eaeaea',
                'box-shadow': 'none'
            });
        });
        
        return htmlPages;
    };
    
    function calculatePagesCount(elementsCount, pageSize) {
        var pagesCount;
        if (elementsCount / pageSize <= 1) {
            pagesCount = 1;
        } else {
            pagesCount = Math.floor(elementsCount / pageSize) + 1;
        }
        
        return pagesCount;
    };
    
    ko.bindingHandlers.pagingForeach = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {  
            var pageSize = 6,
                dishes = ko.unwrap(valueAccessor()),
                dishesCount = dishes.length,
                pageCount = calculatePagesCount(dishesCount, pageSize);

            ko.bindingHandlers.foreach.init(element, valueAccessor, allBindings, viewModel, bindingContext);
            
            createHtmlPages(pageCount, element);
            
            $('.paging-foreach-item').click(pageClickHandler);
            
            return { controlsDescendantBindings: true };
            
            function pageClickHandler() {
                var currentPage = $(this).text() - 1,
                    i = 0,
                    visibleDishes = [],
                    startIndex = Math.floor(currentPage * pageSize);
                
                while (startIndex < dishes.length && i < pageSize) {
                    visibleDishes.push(dishes[startIndex]);
                    i++;
                    startIndex++;
                }
                
                var newValue = function() {
                    return {
                        data: visibleDishes
                    }
                };
                ko.bindingHandlers.foreach.update(element, newValue, allBindings, viewModel, bindingContext);
            };
        },
        
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var pageSize = 6,
                dishes = ko.unwrap(valueAccessor()),
                dishesCount = dishes.length,
                pageCount = calculatePagesCount(dishesCount, pageSize),
                visibleDishes = [];
            
            var startIndex= 0,
                i=0;
            while (startIndex < dishes.length && i < pageSize) {
                visibleDishes.push(dishes[startIndex]);
                i++;
                startIndex++;
            }
                
            var newValue = function() {
                return {
                    data: visibleDishes
                }
            };
            
            if (pageCount <= 1) {
                $('.paging-foreach').css('display', 'none');
            } else {
                $('.paging-foreach').css('display', 'block');
            }

            ko.bindingHandlers.foreach.update(element, newValue, allBindings, viewModel, bindingContext);
            return { controlsDescendantBindings: true };
        }
    };
})();