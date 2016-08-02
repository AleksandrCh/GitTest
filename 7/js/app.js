(function(global, undefined) {
        
    var dishes = [  
        new DishViewModel('Чёрный хлеб', 'images/dishes/19.jpg', 0, '1.00р.'),
        new DishViewModel('Белый хлеб', 'images/dishes/20.jpg', 0, '1.50р.'),
        new DishViewModel('Пирожок с мясом', 'images/dishes/37.jpg', 0, '8.00р.'),
        new DishViewModel('Салат с колбасой', 'images/dishes/80.jpg', 0, '9.00р.'),
        new DishViewModel('Вареный картофель', 'images/dishes/104.jpg', 0, '5.00р.'),
        new DishViewModel('Макароны с мясом', 'images/dishes/171.jpg', 0, '15.00р.'),
        new DishViewModel('Котлета из рыбы', 'images/dishes/181.jpg', 0, '18.00р.'),
        new DishViewModel('Суп "Харчо"', 'images/dishes/190.jpg', 0, '10.00р.'),
        new DishViewModel('Суп "Борщ"', 'images/dishes/294.jpg', 0, '10.00р.'),
        new DishViewModel('Сок апельсиновый', 'images/dishes/554.jpg', 0, '8.00р.'),
        new DishViewModel('Сырный соус', 'images/dishes/573.jpg', 0, '5.00р.'),
        new DishViewModel('Соус "Барбеккю"', 'images/dishes/574.jpg', 0, '5.00р.'),
        new DishViewModel('Кисло-сладкий соус', 'images/dishes/575.jpg', 0, '5.00р.'),
        new DishViewModel('Сок яблочный', 'images/dishes/585.jpg', 0, '8.00р.'),
        new DishViewModel('Салат из моркови', 'images/dishes/613.jpg', 0, '9.00р.')
    ];
    
    var complexLunchViewModel = new ComplexLunchViewModel();
    complexLunchViewModel.init({
       dishesArray: dishes
    });
    
    ko.applyBindings(complexLunchViewModel);
})(this);