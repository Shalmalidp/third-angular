
import angular from 'angular';


// Register Our Module
angular
  .module('app', []) // Setter for a module
  .controller('CoolController', ['$scope', function ($scope) {
    
    let farm = ['goat', 'zebra', 'lion', 'bear'];
    
    
    $scope.animals = farm.map( function (an) {
      return an + " is from my farm";
    });
    
    
  }])
;