'use strict';

var view1 = angular.module('view1',[]);

view1.controller('View1Ctrl', function($scope,stringService,$http,$log,$location,$anchorScroll,$filter,$rootScope) {	

	$scope.transformString = function(input) {
		$scope.output = stringService.processString(input);
}

	$scope.scrollTo = function (scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll();
}

$http.get('/testjsondata/test.json')
	 .then(function (response) {
	  	$scope.response = response.data;
	  }, function (reason) {
	  	$scope.reason = reason.data;
	  	$log.info(reason);
	  }
	);

$scope.Id = '1';
$scope.companies = $filter('filter')($scope.response, function (brand) {
    return $scope.Id === brand.company;
});
//console.log( $scope.companies.length );

$rootScope.$on('$locationChangeStart', function(angularEvent,next,current) {
		$log.debug("'locationChangeStart' fired");
		$log.debug(angularEvent);
		$log.debug(next);
		$log.debug(current);
	});

$rootScope.$on('$locationChangeSuccess', function(angularEvent,next,current) {
		$log.debug("'locationChangeSuccess' fired");
		$log.debug(angularEvent);;
		$log.debug(next);
		$log.debug(current);
	});

$rootScope.$on('$routeChangeStart', function(angularEvent,next,current) {
		$log.debug("'$routeChangeStart' fired");
		$log.debug(angularEvent);
		$log.debug(next);
		$log.debug(current);
	});

$rootScope.$on('routeChangeSuccess', function(angularEvent,next,current) {
		$log.debug("'routeChangeSuccess' fired");
		$log.debug(angularEvent);;
		$log.debug(next);
		$log.debug(current);
	});
});


