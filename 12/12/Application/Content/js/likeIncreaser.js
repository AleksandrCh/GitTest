(function (global, undefined) {
    'use strict';
    $(document).ready(function () {
        $('#submit').click(function (e) {
            e.preventDefault();
            var name = $('#search').val();
            name = encodeURIComponent(name);
            $('#results').load('@Url.Action("BookSearch", "Home")?name=' + name)
        });
    });
})(this);