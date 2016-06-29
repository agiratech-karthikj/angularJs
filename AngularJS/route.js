var detailsApp = angular.module('myapp', ["ngRoute"]);

detailsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/details', {
        templateUrl: 'details.html',
        controller: 'secondcontroller'
      })
  }]);
detailsApp.controller("myfirstcontroller", function($rootScope,$scope,$http) {
  $rootScope.hideContainer = false;
  $http.get("https://adminstaging.jurni.me/posts").then(function(response) {
    $scope.students = response.data.records;
    $scope.details = function(id) {
      angular.forEach($scope.students, function(value, key){
        if (value._id.$oid === id) {
         $scope.postdetails = value;
        };
      });
    }
  }, function(response) {
     alert("failed")
  });
});
detailsApp.controller("secondcontroller", function($rootScope,$scope) {
  $rootScope.hideContainer = true;
});
