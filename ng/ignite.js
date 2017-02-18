var requires = [
    [
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js',
        //'/app/ng/app.js'
        //'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.3/sass.min.js'
    ],
    [
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-route.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-aria.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-animate.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.1/angular-material.min.js'
    ],
    ['/app/ng/app.js']
];

var css = [
    'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.1/angular-material.min.css'
];

for (var i; i < css.length; i++) {
    loadCss(i);
}

requirejs(requires[0], function (util) {
    requirejs(requires[1], function(util) {
        requirejs(requires[2]);
    });
});

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}