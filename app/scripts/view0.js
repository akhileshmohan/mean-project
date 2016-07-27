'use strict';

var view0 = angular.module('view0',['ngRoute']);

view0.controller('View0Ctrl', function($scope,$http,$log,$route) {

$http.get("/testjsondata/images.json")
	 .then(function (response) {
	  	$scope.response = response.data;
	  }, function (reason) {
	  	$scope.reason = reason.data;
	  	$log.info(reason);
	  	console.log(reason);
	  }
	);


// .controller('ViewACtrl', function() {
// this.name = "Karnataka";
// })

// .controller('ViewBCtrl', function() {

// this.name = "Bengaluru";
});






