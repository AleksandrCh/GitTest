(function(global, ko, undefined) {
    'use strict';
    var dishes = [  
        new DishViewModel('Чёрный хлеб', 'images/dishes/19.jpg', 0, 1.00),
        new DishViewModel('Белый хлеб', 'images/dishes/20.jpg', 0, 1.50),
        new DishViewModel('Пирожок с мясом', 'images/dishes/37.jpg', 0, 8.00),
        new DishViewModel('Салат с колбасой', 'images/dishes/80.jpg', 0, 9.00),
        new DishViewModel('Вареный картофель', 'images/dishes/104.jpg', 0, 5.00),
        new DishViewModel('Макароны с мясом', 'images/dishes/171.jpg', 0, 15.00),
        new DishViewModel('Котлета из рыбы', 'images/dishes/181.jpg', 0, 18.00),
        new DishViewModel('Суп "Харчо"', 'images/dishes/190.jpg', 0, 10.00),
        new DishViewModel('Суп "Борщ"', 'images/dishes/294.jpg', 0, 10.00),
        new DishViewModel('Сок апельсиновый', 'images/dishes/554.jpg', 0, 8.00),
        new DishViewModel('Сырный соус', 'images/dishes/573.jpg', 0, 5.00),
        new DishViewModel('Соус "Барбеккю"', 'images/dishes/574.jpg', 0, 5.00),
        new DishViewModel('Кисло-сладкий соус', 'images/dishes/575.jpg', 0, 5.00),
        new DishViewModel('Сок яблочный', 'images/dishes/585.jpg', 0, 8.00),
        new DishViewModel('Салат из моркови', 'images/dishes/613.jpg', 0, 9.00)
    ];
    
    var categories =  [
        new Category('Салаты', [dishes[3], dishes[14], dishes[1], dishes[2], dishes[4], dishes[5], dishes[6], dishes[7], dishes[8], dishes[9], dishes[5], dishes[6], dishes[7], dishes[8], dishes[9]]),
        new Category('Хлеб', [dishes[0], dishes[1]]),
        new Category('Напитки', [dishes[13], dishes[9]]),
        new Category('Гарниры', [dishes[4]]),
        new Category('Вторые блюда', [dishes[5], dishes[6]]),
        new Category('Пирожки', [dishes[2]]),
        new Category('Супы', [dishes[7], dishes[8]]),
        new Category('Соусы', [dishes[12], dishes[11], dishes[10]])
    ];
    
    var complexLunchViewModel = new ComplexLunchViewModel();
    complexLunchViewModel.init({
        categoriesArray: categories    
    });
    
    ko.applyBindings(complexLunchViewModel);
    
    return this;
})(this, ko);