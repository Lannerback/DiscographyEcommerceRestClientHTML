var app = angular.module("main",["ngRoute","controllers"]);
  main.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('views/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        }).
        when('/list', {
          templateUrl: 'login.html',
          controller: 'ListCtrl'
        }).
        when('/add', {
          templateUrl: 'partials/add.html',
          controller: 'AddCtrl'
        }).
        when('/todos/:todoId', {
          templateUrl: 'partials/detail.html',
          controller: 'DetailCtrl'
        }).
        otherwise({
          redirectTo: '/home'
        });
    }]);

    var module = angular.module("controllers",[])
    .controller("AppCtrl",function(){})
    .controller("HomeCtrl",function(){})
    .controller("ListCtrl",function(){})
    .controller("AddCtrl",function(){})
    .controller("DetailCtrl",function(){});
