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
  	var self = this;
  	self.works = [];
    $http.get('./data/works.json')
    	.success( function (data) {
    		console.log(data);
    		self.works = chunk(data, 3);
    	});
  }]);

function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}