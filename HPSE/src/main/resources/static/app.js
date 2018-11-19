(function() {
	var app = angular
			.module('hpse', [ 'ngRoute','hpse.utilModule', 'angular.filter','ngBootbox'])

			.controller('MainController', function($scope, $window) {
				console.log("Im in Main Controller");
				$scope.populateGuide = function()
				{
					$scope.hide1 = false;
					$scope.hide2 = true;
					$scope.hide3 = true;
				}
				$scope.navigateToFill = function()
				{
					$scope.hide1 = true;
					$scope.hide2 = false;
					$scope.hide3 = true;
				}
				$scope.navigateToResult = function()
				{
					$scope.hide1 = true;
					$scope.hide2 = true;
					$scope.hide3 = false;
				}
				$scope.navigateToSummary = function()
				{
					$scope.hide1 = false;
					$scope.hide2 = true;
					$scope.hide3 = true;
				}
				/* $window.location.href = '#/Node'; */
			})
			/* CCPSRequest Controller */
			.controller(
					'assessmentController',
					function($scope, $route, $location, $http,$ngBootbox,$route) {
						$scope.captureInput = true;
						$scope.user = {};
						$scope.user.noOfCities = '';
						$scope.newField = [];
						$scope.editing = false;
						$scope.user.matrix = [];
							$scope.createMatrix = function()
							{
								if($scope.user.noOfCities==null || $scope.user.noOfCities==undefined ||$scope.user.originCity==null ||$scope.user.originCity == undefined)
									{
									$scope.error = "The Number of Cities and Origin City should not be empty"
										$ngBootbox.alert(""+$scope.error)
				                        .then(function() {
				                        	$scope.error=false;
				                        })
									}
								else if($scope.user.noOfCities<=2)
									{
									$scope.error = "The minimum number of cities to calculate shortest path is 3"
										$ngBootbox.alert(""+$scope.error)
				                        .then(function() {
				                        	$scope.error=false;
				                        })
									}
								else if($scope.user.originCity>=$scope.user.noOfCities)
									{
									$scope.error = "The origin city should not be greater than or equal to the No of cities entered"
										$ngBootbox.alert(""+$scope.error)
				                        .then(function() {
				                        	$scope.error=false;
				                        })
									}
								else if($scope.user.originCity<0)
								{
								$scope.error = "The origin city should not be negative"
									$ngBootbox.alert(""+$scope.error)
			                        .then(function() {
			                        	$scope.error=false;
			                        })
								}
								else
								{
									var noOfCities = $scope.user.noOfCities;
									for(var i=0; i<noOfCities; i++) {
										$scope.user.matrix[i] = [];
										for(j=0;j<noOfCities;j++)
										{
										 $scope.user.matrix[i][j] = 0;	
										}
									}
									console.log($scope.user.matrix)
									$scope.captureInput = false;
								}
							}
							$scope.editAppKey = function() {
								console.log($scope.user.matrix);
							}

							$scope.saveField = function() {
								console.log($scope.user.matrix);
							}

							$scope.cancel = function() {
								console.log($scope.user.matrix);      
							}
						$scope.populateRequestPage = function() {
							$scope.captureInput = true;
							$http.get('/HPSE/allrequests')
									.then(
											function(response) {
												console.log(response.data);
												$scope.usersList = response.data;
												}, function(response) {
												console.log("throw error");
											});
						}
						$scope.findShortestPath = function() {
							console.log("---------------------------------->");
							console.log($scope.user);
							$scope.user.requestSubmissionDate=(moment($scope.model).format('YYYY-MM-DD'));
							console.log("date is----->"+$scope.user.requestSubmissionDate);
							console.log("$scope.user"+$scope.user);
								$http.post('/HPSE/request', $scope.user).then(
										function(response) {
											console.log(response.data);
											alert("Your Request Number is: "+response.data.requestDetailsId+" and Your shortest Travel Path and cost is: "+response.data.shortestPath)
											/* Data.setSuccessCode(response.data.commandName); */
											$route.reload();
										}, function(response) {
											console.log("throw error");
										});
						};
					}, function($scope) 
					{
						console.log("throw error");
					})
				.config(function($routeProvider, $locationProvider) {
				$routeProvider.when('/HPSE', {
					templateUrl : 'modules/hpse/templates/Request.html',
					controller : 'assessmentController'
				}).when('/UserGuide', {
					templateUrl : 'modules/hpse/templates/UserGuide.html',
					controller : 'MainController'
				})
				.when('', {});
				$locationProvider.html5Mode(false);
			});
})();