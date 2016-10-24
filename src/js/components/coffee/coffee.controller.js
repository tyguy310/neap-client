(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'CoffeeService'];

  function coffeeController($scope, CoffeeService) {
    /*jshint validthis: true */
    this.greeting = 'Hello Coffee!';
    CoffeeService.getAllCoffee()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

})();
