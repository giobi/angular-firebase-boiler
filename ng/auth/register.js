(function() {
'use strict'; angular.module('app')
  
.service('api', function($http) {
  return {
    base: '/api/0/',
    call: function(url, input, verb) {
      if (!verb) verb = 'post';
      url = this.base + url;
      return $http[verb](url, input);
    }
  };
})
.controller('register', function(api) {
  var s = this;
  s.submit = function(user) {
    api.call('auth/register', user);
  };
  
});
  
})();