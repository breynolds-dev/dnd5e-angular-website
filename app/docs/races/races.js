'use strict';

angular.module('fiveApi.docs.races', [])
  .controller('DocsRacesController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.races', {
        url: '/races',
        templateUrl: 'app/docs/races/races.html',
        controller: 'DocsRacesController'
      });
  });