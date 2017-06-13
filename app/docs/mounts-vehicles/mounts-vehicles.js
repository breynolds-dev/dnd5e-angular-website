'use strict';

angular.module('fiveApi.docs.mountsVehicles', [])
  .controller('DocsMountsVehiclesController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.mountsVehicles', {
        url: '/mounts-vehicles',
        templateUrl: 'app/docs/mounts-vehicles/mounts-vehicles.html',
        controller: 'DocsMountsVehiclesController'
      });
  });