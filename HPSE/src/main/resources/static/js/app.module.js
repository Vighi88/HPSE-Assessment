(function(){
	alert("hi");
	console.log("hi");
	var app = angular.module('netops', ['ngRoute', 'netops.utilModule', 'LocalStorageModule', 'angular.filter'])

	.run(function($rootScope, $location, $anchorScroll,$templateCache) {
		//when the route is changed scroll to the proper element.
		$rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
			if($location.hash()) $anchorScroll();  
		});
		$rootScope.$on('$routeChangeStart', function(event, next, current) {
			if (typeof(current) !== 'undefined'){
				$templateCache.remove(current.templateUrl);
			}
		});
	})
	
 .config(function (localStorageServiceProvider) {
  localStorageServiceProvider
  
    //
    // Namespace our local storage variables to avoid clashes with other applications
    //
  
    .setPrefix('netops')
    
    //
    // Turn off cookie "fall back" for browsers that don't support local storage.
    //
    // This means we don't support browsers that don't support local storage.
    // We use local storage rather that cookies to store authentication details.
    // Using local storage instead of cookies means we are protected from 
    // CSRF attacks as such attacks rely on authentication details being
    // stored in cookies.
    //
    // Do not turn on cookie support without adding CSRF protection. For details
    // no CSRF see http://docs.spring.io/spring-security/site/docs/current/reference/html/csrf.html
    //
  
    .setDefaultToCookie(false)
    
    // setitem notification required (used in ProductController)
    .setNotify(true, false);
})

.constant('ERROR_TEXT', {
        'SERVER': "Error occurred on the server. Please contact your system administrator."
    })

/* .controller('NetworkCLIController', function($scope, $route, $routeParams, $location, localStorageService) {  
     alert("working");
 })*/
    .factory('Data', function ($q) {

    var data = {
        SuccessCode:'',
        ErrorFromServer:'',
        ErrorCode:'',
        LinkClicked:''
    };

    return {
        getSuccessCode: function () {
            return data.SuccessCode;
        },
        setSuccessCode: function (SuccessCode) {
            data.SuccessCode = SuccessCode;
            // data.SuccessCode;
        },
        getErrorFromServer: function () {
            return data.ErrorFromServer;
        },
        setErrorFromServer: function (ErrorFromServer) {
            data.ErrorFromServer = ErrorFromServer;
            // data.SuccessCode;
        },
        setErrorCode: function (ErrorCode) {
        data.ErrorCode = ErrorCode;
        //return data.ErrorCode ;
        },
        getErrorCode: function () {
        return  data.ErrorCode;
        },
    ///aadded for common landing page in rm
	    getLinkClicked: function () {
	        return data.LinkClicked;
	    },
	    setLinkClicked: function (LinkClicked) {
	        data.LinkClicked = LinkClicked;
	        // data.SuccessCode;
	    }
///aadded for common landing page in rm end 
    };
})
 .factory('notAuthorizedHttpInterceptor', function ($q, $location, localStorageService) {
    
	var interceptor = {
			responseError: function(response) {
	        					
	     		if (response.status == 401) {  
	     			// typically this means our token has expired so let's force a logout
	     			console.log('token either expired or was not present, removing and forcing logout');
	     			var keys = localStorageService.keys();
	     			for (var i = 0; i < keys.length; i++) {
	     			    localStorageService.remove(keys[i]);
	     			}
	     			$location.path('/Logout');
	     		}
	     		
	     		return $q.reject(response);
	        }
	    };

    return interceptor;
})

 .factory('errorHttpInterceptor', function ($q) {
    
	var interceptor = {
			responseError: function(response) {
	        	
				console.log("An error was encountered " + response.status);
				
	     		if (response.status == 422) {         	
	     			response.errorText = response.data.message;
	     		}
	     			     		
	     		return $q.reject(response);
	        }
	    };

    return interceptor;
})

 .factory('baseUrlHttpInterceptor', function (localStorageService, moduleRegistry) {
    
	var interceptor = {
	        request: function(config) {
	        	
	        	var module = moduleRegistry.includesBaseUrl(config.url);
	        	
	        	if (module) {
	        		var clientBaseUrl = localStorageService.get('env.baseurl.' + module.name);
	        		if (clientBaseUrl) {
		        		config.url = clientBaseUrl + config.url;
		        	}
	        	}
	        	
	            return config;
	        }
	    };

    return interceptor;
})
 .config(['$httpProvider', function($httpProvider) {  
	    $httpProvider.interceptors.push('notAuthorizedHttpInterceptor');
	    $httpProvider.interceptors.push('errorHttpInterceptor');
	    $httpProvider.interceptors.push('baseUrlHttpInterceptor');
 }])
.controller('NavigationController',function(){
	console.log("im in controller");
    		})
    		.controller('NetworkCLIController',function(){
console.log("im in controller");
})
.config(function($routeProvider, $locationProvider) {
	console.log("im inside when");
            $routeProvider
                .when('/CCPS', {
                    templateUrl: 'templates/ccps.html',
                    	controller: 'NavigationController'
                })
                .otherwise({
                    redirectTo : 'templates/ccps.html'
                });
});
})();
