(function() {
'use strict'; angular.module('hubmot')
  
.service('api', function($http) {
  var r = {
    base: '/hubmot/public/api/',
    call: function(url, input, verb) {
      if (!verb) verb = 'post';
      url = this.base + url;
      return $http[verb](url, input);
    }
  };
  return r;
})
.controller('register', function(api) {
  var s = this;
  s.submit = function(user) {
    api.call('auth/register', user);
  };
  
});
  
})();