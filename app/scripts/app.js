'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'view0',
  'view1',
  'view2',
  'view3',
  'techstack',
  'stringService',
  'angular.filter'
 ]);

myApp.config(['$locationProvider', '$routeProvider', '$anchorScrollProvider',
	function($locationProvider, $routeProvider, $anchorScrollProvider,$routeParams) {

  // $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);

  $routeProvider.caseInsensitiveMatch = true;

  $routeProvider
  .when('/view0', {
    templateUrl: '/view0.html',
    controller: 'View0Ctrl'
  })
  .when('/', {
    templateUrl: '/view0.html',
    controller: 'View0Ctrl'
  })
  .when('/view1', {
    templateUrl: '/view1.html',
    controller: 'View1Ctrl'
  })
  .when('/view2', {
    templateUrl: '/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/images/:imageURL', {
    templateUrl: '/view3.html',
    controller: 'View3Ctrl'
  })
  .when('/techstack', {
    templateUrl: '/techstack.html',
    controller: 'View4Ctrl'
  })
  .otherwise({
    redirectTo: '/view0'
  });

  }]);
