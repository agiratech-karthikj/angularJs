var myApp = angular.module("bFApp",['ngRoute']);

//Routing Procedure

myApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider

  	.when('/mainBasicForm',{
  		templateUrl:'mainBasicForm.html',
      controller:'mainBasicForm'
  	})

  	.when('/BasicForm',{
	    templateUrl: 'BasicForm.html',
	    controller: 'fetchShippingAddress'
  	})

  	.when('/BasicFormPost',{
  		templateUrl: 'BasicFormPost.html',
  		controller:'sendingShippingAddress'
  	})
}]);