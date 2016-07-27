'use strict';

var view3 = angular.module('view3',[]);

view3.controller('View3Ctrl',['$scope','$routeParams', function($scope,$routeParams){
	$scope.imgURL = $routeParams.imageURL;

}]);
