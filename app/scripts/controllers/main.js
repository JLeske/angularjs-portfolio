'use strict';

/**
 * @ngdoc function
 * @name angularjsPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsPortfolioApp
 */
angular.module('angularjsPortfolioApp')
  .controller('MainCtrl', ['$http', function ($http) {
    $http.get('http://127.0.0.1/lem_portfolio_page/works/')
    	.success( function (data) {
    		console.log(data);
    	});
  }]);
