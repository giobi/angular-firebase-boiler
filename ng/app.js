(function() {
'use strict'; angular.module('app', ['ngRoute', 'ngMaterial', 'firebase'])
  
.config(function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/register/'})
  .when('/register/', {
    templateUrl: 'ng/auth/register.html',
    controller: 'register', controllerAs: 's'
  });
});
  
})();