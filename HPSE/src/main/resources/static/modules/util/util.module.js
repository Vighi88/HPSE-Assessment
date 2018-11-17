(function(){
angular.module('hpse.utilModule', []);

angular.module('hpse.utilModule')

.provider('moduleRegistry', function() {
	
	var registry = [];
		  
	return {
		register: function (newModule) {
			registry.push(newModule)
		},
		    
	    $get: function () {
	      return {
	    	  modules: registry,
	    	  
	    	  includesBaseUrl: function(url) {
	    		  for (var i in registry) {
	    			  if (url.startsWith(registry[i].baseUrl)) {
	    				  return registry[i];
	    			  }
	    		  }
	    		  return null;
	    	  }
	      };
	    }
	  }
	
});

})();

