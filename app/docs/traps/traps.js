'use strict';

angular.module('fiveApi.docs.traps', [])
  .controller('DocsTrapsController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.traps', {
        url: '/traps',
        templateUrl: 'app/docs/traps/traps.html',
        controller: 'DocsTrapsController'
      });
  });