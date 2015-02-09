'use strict';

/**
 * @ngdoc function
 * @name angularjsPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsPortfolioApp
 */
angular.module('angularjsPortfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
