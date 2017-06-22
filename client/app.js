var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller:'ClientsController',
    templateUrl:'views/clients.html'
  })
  .when('/clients', {
    controller:'ClientsController',
    templateUrl:'views/clients.html'
  })
  .when('/clients/details/:id', {
    controller:'ClientsController',
    templateUrl:'views/client_details.html'
  })
  .when('/clients/add', {
    controller:'ClientsController',
    templateUrl:'views/add_client.html'
  })
  .when('/clients/edit/:id', {
    controller:'ClientsController',
    templateUrl:'views/edit_client.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
