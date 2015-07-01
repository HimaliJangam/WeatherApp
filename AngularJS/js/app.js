'use strict';
//Declaration of module.
var WeatherApp = angular.module('WeatherApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ngDragDrop',
          'ui.bootstrap', 'pasvaz.bindonce'],
          
		function($routeProvider) {
			//Routing to home.html when '/home' parameter is present
			$routeProvider.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'homeController'				
			});
			//Routing to home,html by default.
			$routeProvider.otherwise({
				templateUrl: 'templates/home.html',
				controller: 'homeController'
			});
});
