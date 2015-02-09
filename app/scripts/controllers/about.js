'use strict';

/**
 * @ngdoc function
 * @name angularjsPortfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsPortfolioApp
 */
angular.module('angularjsPortfolioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
