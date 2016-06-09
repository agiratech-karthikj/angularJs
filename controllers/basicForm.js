// Main Basic Form Controller

myApp.controller('mainBasicForm',function($rootScope,$scope)
{
	$rootScope.hideContainer = false; //Showing Index Content
});

//Get Request

myApp.controller('fetchShippingAddress',function($rootScope,$scope,$http)
{   
	$rootScope.hideContainer = true;
    $http.get("http://52.9.31.59/api/",
    {
    	headers:
    	{
	        'App-Id':'EmVOyX6rI1d0rTfr',
 			'Api-Key':'XHftA5Zi8nSe5yTQcV4PaVaVh2O5P360'
    	}
    }).then(function(response) 
    {
        $scope.myData = response.data.shippingAddresses;
    });
});

// Dropdown Population

myApp.controller('CountryStateCityCtnl',function($scope)
{
 	$scope.countries = 
 	[
 		{          
	 		"name":"India",
	 		"id":1
 		},
 		{
	 		"name":"USA",
	 		"id":2
 		},
 		{
 			"name":"Australia",
 			"id":3
 		}
  	];
   	$scope.states = [
	   	{
	        "name": "Tamil Nadu",
	        "id": 1,
	        "countryId": 1
	    },
	    {
	        "name": "Karnataka",
	        "id": 2,
	        "countryId": 1
	    },
	    {
	        "name": "Andhra Pradesh",
	        "id": 3,
	        "countryId": 1
	    },
	    {
	        "name": "Goa",
	        "id": 4,
	        "countryId": 1
	    }, 
	    {
	        "name": "Gujurat",
	        "id": 5,
	        "countryId": 1
	    },
	    {
	    	"name":"Albama",
	    	"id":6,
	    	"countryId":2
	    },
	    {
	    	"name":"Florida",
	    	"id":7,
	    	"countryId":2
	    },
	    {
	    	"name":"California",
	    	"id":8,
	    	"countryId":2
	    },
	    {
	    	"name":"Texas",
	    	"id":9,
	    	"countryId":2
	    },
	    {
	    	"name":"New South Wales",
	    	"id":10,
	    	"countryId":3
	    },
	    {
	    	"name":"Tasmania",
	    	"id":11,
	    	"countryId":3
	    },
	    {
	    	"name":"Western Australia",
	    	"id":12,
	    	"countryId":3
	    }
    ];
    $scope.updateCountry = function()
    {
	    $scope.availableStates = [];  
	    angular.forEach($scope.states, function(value){
	        if(value.countryId == $scope.data.country.id){
	          $scope.availableStates.push(value);
	        }
	    });
    }
});

//Post Request

myApp.controller('sendingShippingAddress',['$rootScope','$scope','$http',function($rootScope,$scope,$http)
{
	$rootScope.hideContainer = true;   //Hiding Index Page Content
	$scope.data = 
	{
		"id" : "",
		"address1":"",
		"address2":"",
		"country":"",
		"state":"",
		"city":"",
		"zipCode":"",
		"retailerId":""
	};
	$scope.sendPostData=function()
	{
		var formData = JSON.stringify({
			"id":parseInt($scope.data.id),
			"address1":$scope.data.address1,
			"address2":$scope.data.address2,
			"country":$scope.data.country.name,
			"state":$scope.data.state.name,
			"city":$scope.data.city,
			"zipCode":$scope.data.zipCode,
			"retailerId":parseInt($scope.data.retailerId)
		});
		console.log(formData);
		$http.post("http://192.168.0.4:8000/v1/shippingAddress",formData).then(
		function(response)
		{
			//First function handles success
	        $scope.content = response.data;
	        alert("Record Saved Successfully");
		}, 
		function(response)
		{
	        //Second function handles error
	        $scope.content = "Something went wrong";
	        alert($scope.content);
	    });
	}
}]);

//Put Request

/*myApp.controller('updatingShippingAddress',function($scope,$http){
	$scope.updateShippingDetails =  function(updateid)
    {
    	console.log(updateid);
        for (i in $scope.myData)
        {
            if ($scope.myData[i].id == updateid)
            {
                var data = JSON.stringify
                ({
                   "address1":$scope.myData[i].address1,
				   "address2":$scope.myData[i].address2,
				   "country":$scope.myData[i].country.name,
				   "state":$scope.myData[i].state.name,
			       "city":$scope.myData[i].city
                });
            }
        }
        $http.put("http://192.168.0.4:8000/v1/shippingAddress/"+updateid,data).then(
		function(response)
		{
			//First function handles success
	        $scope.content = response.data;
	        alert($scope.content);
		}, 
		function(response)
		{
	        //Second function handles error
	        $scope.content = "Something went wrong";
	        alert($scope.content);
	    });
    }
});*/