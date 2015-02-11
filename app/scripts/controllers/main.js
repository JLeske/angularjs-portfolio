'use strict';

/**
 * @ngdoc function
 * @name angularjsPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsPortfolioApp
 */
angular.module('angularjsPortfolioApp')
    .controller('MainCtrl', ['$http', function($http) {
        var self = this,
        	tmpData = [];

        self.works = ['xxx'];
        self.rawData = [];
        $http.get('./data/works.json')
            .success(function(data) {
                console.log(data);
                self.rawData = data;
                
                self.works = self.getNewWorksList('all');
            });

        self.getNewWorksList = function(type) {
        	var obj = {};
            console.log(type);
            tmpData = [];
            if ( type === 'all' )
            {
            	tmpData = self.rawData;
            }
            else
            {
            	for (var i = 0; i < self.rawData.length; i++) {
            		
            		obj = self.rawData[i];
            		if ( obj.category_id === type.toString() )
	            	{
	            		tmpData.push(obj);
	            	}
            	}
            }
            
            return self.chunk(tmpData, 4);
        };

        self.doFilter = function (type) {
            
            self.works = self.getNewWorksList(type);
        };

        self.chunk = function(arr, size) {
            var newArr = [];
            for (var i = 0; i < arr.length; i += size) {
                newArr.push(arr.slice(i, i + size));
            }
            return newArr;
        };
    }]);

