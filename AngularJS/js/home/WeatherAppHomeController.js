//Declaration of controller.
WeatherApp.controller('homeController', ['$scope', '$http', function($scope, $http){
	//Declaration of $scope variable to be used on UI
	$scope.newCityName='';
	$scope.cityNames=['Mumbai', 'London'];
	var weatherImage = '';
	
	/*This function gets data for the current forecast using a http request.*/
	$scope.getWeatherForecast = function(name) {
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
		$http.get(url + name).then(function(data)// To keep it dynamic the city name is fetched from UI and appended.
		{
			$scope.weatherForecastData = data.data;
			
			//After the data is fetched using weather Id from it different icons can be set on UI indicating the weather.
			var weatherId = $scope.weatherForecastData.weather[0].id;
			if(weatherId == 800)
			{
			weatherImage = '01d.png';	
			}
			else if(weatherId == 801)
			{
			weatherImage = '02d.png';	
			}
			else if(weatherId == 802)
			{
			weatherImage = '03d.png';	
			}
			else if(weatherId == 803)
			{
			weatherImage = '04d.png';	
			}
			else if(weatherId == 804)
			{
			weatherImage = '04d.png';	
			}
			$scope.weatherIconURL = 'http://openweathermap.org/img/w/'+ weatherImage;
		});
	};
	
	/*This function add a newly entered city to the array of thumbnails*/
	 $scope.addCity = function(name) {
        $scope.cityNames.push(name);   
    };
	
	$scope.getWeatherForecast('Mumbai');
}]);



