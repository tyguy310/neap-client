(function() {

  'use strict';

  angular
  .module('myApp.services', [])
  .service('CoffeeService', CoffeeService);

  CoffeeService.$inject = ['$http'];

  function CoffeeService($http) {
    this.getAllCoffee = function() {
      return $http.get('https://git.heroku.com/morning-oasis-72544.git3305f45..1def890');
    };
  }
})();
