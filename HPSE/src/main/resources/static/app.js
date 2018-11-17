(function() {
	var app = angular
			.module('hpse', [ 'ngRoute','hpse.utilModule', 'angular.filter','ngBootbox','ngTagsInput','ngAnimate','chart.js'])

			.controller('MainController', function($scope, $window) {
				console.log("Im in Main Controller");
				/* $window.location.href = '#/Node'; */
			})
			.controller('NodeController', function($scope) {
			})
			.factory('WIFACapacity', function() {
		 var autoPopulateElements=[];
		 var globalRequestID='';
		 var globalRequestName='';
		 var globalRequestSubmittedDate='';
		 var nodeListElements=[];
         return {
        	 getglobalRequestID: function () {
                 return globalRequestID;
             },
             setglobalRequestID: function (requestID) {
            	 globalRequestID=requestID;
             },
             getglobalRequestName: function () {
                 return globalRequestName;
             },
             setglobalRequestName: function (requestName) {
            	 globalRequestName=requestName;
             },
             getglobalRequestSubmittedDate: function () {
                 return globalRequestSubmittedDate;
             },
             setglobalRequestSubmittedDate: function (requestDate) {
            	 globalRequestSubmittedDate=requestDate;
             },
             getautoPopulateElements: function () {
                 return autoPopulateElements;
             },
             setautoPopulateElements: function (elementData) {
            	 autoPopulateElements=elementData;
             },
             getnodeListElements: function () {
                 return nodeListElements;
             },
             setnodeListElements: function (elementData) {
            	 nodeListElements=elementData;
             }
         };

     })
			.directive('myNodes',['$compile','WIFACapacity',function($compile,WIFACapacity) {
								return {
									restrict : 'A',
									link : function(scope, element, attrs) {
										console.log("im in directive");
										scope.$watch(function(){
										var nodes = {};
										var links = [];
										angular.copy(WIFACapacity.getautoPopulateElements(),links);
										// Compute the distinct nodes from the
										// links.
										links.forEach(function(link) {
											link.source = nodes[link.source]
													|| (nodes[link.source] = {
														name : link.source
													});
											link.target = nodes[link.target]
													|| (nodes[link.target] = {
														name : link.target
													});
										});
										var width = 560, height = 300;
										d3.select(element[0]).selectAll("svg").remove();
										var force = d3.layout.force().nodes(
												d3.values(nodes)).links(links)
												.size([ width, height ])
												.linkDistance(60).charge(-300)
												.on("tick", tick).start();
										var mySvg = d3.select(element[0])
												.append("svg").attr("width",
														width).attr("height",
														height);

										mySvg.append("defs")
												.selectAll("marker").data(
														[ "suit", "licensing",
																"resolved" ])
												.enter().append("marker").attr(
														"id", function(d) {

															return d;
														}).attr("viewBox",
														"0 -5 10 10").attr(
														"refX", 15).attr(
														"refY", -1.5).attr(
														"markerWidth", 6).attr(
														"markerHeight", 6)
												.attr("orient", "auto").append(
														"path").attr("d",
														"M0,-5L10,0L0,5");

										var path = mySvg.append("g").selectAll(
												"path").data(force.links())
												.enter().append("path").attr(
														"class",
														function(d) {
															return "link "
																	+ d.relationShipType;
														}).attr(
														"marker-end",
														function(d) {
															return "url(#"
																	+ d.relationShipType
																	+ ")";
														});
										var color = d3.scale.category20();

										var circle = mySvg.append("g")
												.selectAll("circle").data(
														force.nodes()).enter()
												.append("circle").attr("r", 26)
												.attr("fill", function(d,i){return color(i);}).call(
														force.drag);
										var text = mySvg.append("g").selectAll(
												"text").data(force.nodes())
												.enter().append("text").attr(
														"x", 8).attr("fill","black").attr("y",
														".31em").attr("dx",
														function(d) {
															return -20
														}).text(function(d) {
													return d.name;
												});
										// Use elliptical arc path segments to
										// doubly-encode directionality.
										function tick() {
											path.attr("d", linkArc);
											circle.attr("transform", transform);
											text.attr("transform", transform);
										}

										function linkArc(d) {

											var dx = d.target.x - d.source.x, dy = d.target.y
													- d.source.y, dr = Math
													.sqrt(dx * dx + dy * dy);
											return "M" + d.source.x + ","
													+ d.source.y + "A" + dr
													+ "," + dr + " 0 0,1 "
													+ d.target.x + ","
													+ d.target.y;
										}

										function transform(d) {
											return "translate(" + d.x + ","
													+ d.y + ")";
										}

										element.removeAttr("my-nodes");
										$compile(element)(scope);
									},true);
									}
								}
							} ])
.directive('arrowSelector',['$document','WIFACapacity',function($document,WIFACapacity){
    return{
        restrict:'A',
        link:function(scope,elem,attrs,ctrl){
            var elemFocus = false;
            elem.on('mouseenter',function(){
                elemFocus = true;
            });
            elem.on('mouseleave',function(){
                elemFocus = false;
            });
            $document.bind('keydown',function(e){
                if(elemFocus){
                	var nodeData =[];
                	angular.copy(WIFACapacity.getnodeListElements(),nodeData);
				    if(e.keyCode == 40){
                    	console.log(scope.selectedRow);
                        if(scope.selectedRow == scope.runOutList.length - 1){
                            return;
                        }
                        scope.selectedRow++;
                        console.log(scope.selectedRow);
                        scope.data = [
          						    [15, 19, 30, 31, 16, 15, 20],
          						    [8, 9, 20, 9, 36, 7, 40],
          						    [60,60,60,60,60,60,60],
          						    [,,,,,70,80]
          						  ];
                        scope.setClickedRow(scope.selectedRow,nodeData);
                        scope.$apply();
                        e.preventDefault();
                    }			    
				    if(e.keyCode == 38){
                        console.log(scope.selectedRow);
                        if(scope.selectedRow == 0){
                        scope.setClickedRow(scope.selectedRow,nodeData);
                            return;
                        }
                        scope.selectedRow--;
                        console.log(scope.selectedRow);
                        scope.data = [
            						    [25, 29, 40, 41, 26, 85, 20],
            						    [78, 39, 60, 39, 36, 75, 10],
            						    [70, 70,70,70,70,70,70],
            						    [,,,,,60,70]
            						  ];
                        scope.setClickedRow(scope.selectedRow,nodeData);
                        scope.$apply();
                        e.preventDefault();
                    }
                }
            });
        }
    };
}])
			/* CCPSRequest Controller */
			.controller(
					'assessmentController',
					function($scope, $route, $location, $http,$ngBootbox,$route,WIFACapacity) {
						$scope.captureInput = true;
						$scope.user = {};
						$scope.user.noOfCities = '';
						$scope.newField = [];
						$scope.editing = false;
						$scope.user.matrix = [];
								$scope.showRequestData= function(requests) {
								var requestDataList = [];
								angular.copy(requestList, requestDataList);
								/*WIFACapacity.setglobalRequestID(requestDataList.requestDetailsId);
								WIFACapacity.setglobalRequestName(requestDataList.requestName);
								WIFACapacity.setglobalRequestSubmittedDate(requestDataList.requestDetailsDate);*/
								console.log(requestDataList.status+" "+requestDataList.requestDetailsId);
								if(requestDataList.status === 'Completed' || requestDataList.status === 'COMPLETED')
									{
									 $location.path('/Response');
									}
								else
									{
									$scope.error = "The request you submitted is not yet completed. Please try after sometime"
										$ngBootbox.alert(""+$scope.error)
				                        .then(function() {
				                        	$scope.error=false;
				                        })
									}
							};
							$scope.createMatrix = function()
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
							$scope.editAppKey = function() {
								console.log($scope.user.matrix);
							}

							$scope.saveField = function() {
								console.log($scope.user.matrix);
							}

							$scope.cancel = function() {
								if ($scope.editing !== false) {
									$scope.user.matrix[$scope.editing] = $scope.newField;
									$scope.editing = false;
								}       
							}
						$scope.populateRequestPage = function() {
							$scope.captureInput = true;
							$http.get('/HPSE/allrequests')
									.then(
											function(response) {
												console.log(response.data);
												$scope.requestMatrixList = response.data;
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
											alert("Your Request Number is: "+response.data.requestDetailsId)
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
					
				/* CCPResponse Controller */
					.controller(
					'CCPSResponseController',function($scope, $route, $location, $http,$ngBootbox,$route,WIFACapacity) {
						$scope.requestId = WIFACapacity.getglobalRequestID();
						$scope.requestName = WIFACapacity.getglobalRequestName();
						$scope.requestSubmittedDate = WIFACapacity.getglobalRequestSubmittedDate();
						$scope.disable = true;			
						$scope.selectedRow = null;  // initialize our variable to null
						var runOutList = [];
						$scope.setClickedRow = function(index,nodeListData){  //function that sets the value of selectedRow to current index
							 WIFACapacity.setnodeListElements(nodeListData);
						     $scope.selectedRow = index;
						     angular.copy(nodeListData,runOutList);
						     console.log(runOutList[index].graphData);
						     WIFACapacity.setautoPopulateElements(runOutList[index].graphData);
						     
						  }
						$scope.$watch('selectedRow', function() {
						    console.log('Do Some processing'); //runs the block whenever selectedRow is changed. 
						    });
						$scope.populateCCPSResponse =function()
						{
							
							$http.get('/ccps-wifa/hitlistdata?requestDetailsId=' + $scope.requestId)
							.then(
									function(response) {
										console.log(response.data);
										$scope.runOutList = response.data;
										}, function(response) {
										console.log("throw error");
									});
						}
					      $scope.labels = ["1st Week", "2nd Week", "3rd Week", "4th Week", "5th Week", "6th Week", "7th Week"];
						  $scope.series = ['Series A','Threshold','Linear'];
						  $scope.colours = [{
				          "fillColor": "grey",
				          "strokeColor": "white",
				          "pointColor": "yellow",
				          "pointStrokeColor": "#fff",
				          "pointHighlightFill": "#fff",
				          "pointHighlightStroke": "red"
				        }]
						  $scope.data = [
						    [65, 59, 80, 81, 56, 55, 40],
						    [80, 80,80,80,80,80,80],
						    [40,60,80,85,87,89,90]
						  ];
						  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
						  $scope.options = {
						    scales: {
						      yAxes: [
						        {
						          id: 'y-axis-1',
						          type: 'linear',
						          display: true,
						          position: 'left'
						        }
						      ]
						    }
						  };
						var nodes = [ {
							source : "A1P1",
							target : "B1P1",
							type : "Upload"
						}, {
							source : "B1P1",
							target : "A1P1",
							type : "Download"
						}, {
							source : "B1P1",
							target : "B1",
							type : "Upload"
						}];
						WIFACapacity.setautoPopulateElements(nodes);
					})
				.config(function($routeProvider, $locationProvider) {
				$routeProvider.when('/HPSE', {
					templateUrl : 'modules/ccps/templates/Request.html',
					controller : 'assessmentController'
				}).when('/Node', {
					templateUrl : 'templates/NodeGraph.html',
					controller : 'MainController'
				}).when('/Maintenance', {
					templateUrl : 'modules/ccps/templates/Maintenance.html',
					controller : 'MainController'
				})
				.when('/Response', {
					templateUrl : 'modules/ccps/templates/CCPSResponse.html',
					controller : 'CCPSResponseController'
				})
				.when('', {});
				$locationProvider.html5Mode(false);
			});
})();