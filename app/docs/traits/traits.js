'use strict';

angular.module('fiveApi.docs.traits', [])
  .controller('DocsTraitsController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.traits', {
        url: '/traits',
        templateUrl: 'app/docs/traits/traits.html',
        controller: 'DocsTraitsController'
      });
  });