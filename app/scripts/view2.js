'use strict';

var view2 = angular.module('view2',[]);

view2.controller('View2Ctrl', function($scope,$location,$anchorScroll,$route) {

	$scope.scrollTo = function (scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll();

	}

	// $scope.$on('$routeChangeStart', function(angularEvent, next, current){
	// 	if(!confirm("Are you sure you want to navigate away from this page? " + next.$$route.originalPath)) {
	// 		event.preventDefault();
	// 	}
	// });

	// $scope.$on('$locationChangeStart', function(angularEvent, next, current){
	// 	if(!confirm("Are you sure you want to navigate away from this page? " + next)) {
	// 		event.preventDefault();
	// 	}
	// });


});