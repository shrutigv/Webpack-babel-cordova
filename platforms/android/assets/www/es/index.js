(function() {
    "use strict";
    var app = {
        initialize: function() {
            if (localStorage.getItem("water") === null) {
                window.open('profile.html');
            }
            else{
                window.open('hydrate.html');
            }
        }
    };
    app.initialize();
})();