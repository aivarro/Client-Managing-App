var myApp = angular.module('myApp');

myApp.controller('ClientsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('ClientsController loaded...');

    $scope.getClients = function() {
      $http.get('/api/clients')
          .then(function(response) {
          $scope.clients = response.data;
      });
    }

    $scope.getClient = function() {
      var id = $routeParams.id;
      $http.get('/api/clients/'+id)
          .then(function(response) {
          $scope.client = response.data;
      });
    }

    $scope.addClient = function() {
      //console.log($scope.client);
      $http.post('/api/clients/', $scope.client)
          .then(function(response) {
          window.location.href='#!/clients';
      });
    }

    $scope.editClient = function() {
      var id = $routeParams.id;
      $http.put('/api/clients/'+id, $scope.client)
          .then(function(response) {
          window.location.href='#!/clients';
      });
    }

    $scope.deleteClient = function(id) {
      $http.delete('/api/clients/'+id)
          .then(function(response) {
          window.location.href='#!/clients';
      });
    }
}]);
