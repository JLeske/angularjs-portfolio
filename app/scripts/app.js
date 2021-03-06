'use strict';

/**
 * @ngdoc overview
 * @name angularjsPortfolioApp
 * @description
 * # angularjsPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsPortfolioApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
