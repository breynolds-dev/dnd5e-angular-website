'use strict';

angular.module('fiveApi.docs.toolsTrinkets', [])
  .controller('DocsToolsTrinketsController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.toolsTrinkets', {
        url: '/tools-trinkets',
        templateUrl: 'app/docs/tools-trinkets/tools-trinkets.html',
        controller: 'DocsToolsTrinketsController'
      });
  });