'use strict';

var techstack = angular.module('techstack', ['ngRoute']);

techstack.controller('View4Ctrl', function($scope, $http, $log, $route){
	// $scope.message = "Into techstack page";

$http.get('/techstack')
	 .then(function (response) {
	  		$scope.techStack = response.data;
	  }
	  // ,   function (reason) {
	  // 		$scope.errorMsg = reason.data;
	  // 		$log.info(errorMsg);
	  // 		console.log(errorMsg);
	  // }
	);

$scope.reloadData = function () {
	$route.reload();
};

});